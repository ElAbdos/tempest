import "../global.css";
import {View} from "react-native";
import {getCurrentPositionAsync, requestForegroundPermissionsAsync} from "expo-location";
import {useEffect, useState} from "react";
import {MeteoAPI} from "../api/meteo";
import {Txt} from "../components/Txt";
import {MeteoBasic} from "../components/MeteoBasic";
import {getWeatherInterpretation} from "../services/meteo-service";
import {MeteoAdvanced} from "../components/MeteoAdvanced";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";
import {Coords, Weather} from "../types/weather.types";
import {Container} from "../components/Container";

type RootStackParamList = {
    Home: undefined;
    ForeCast: {
        city: string;
        time: string[];
        temperature_2m_max: number[];
        temperature_2m_min: number[];
        weathercode: number[];
        sunrise: string[];
        sunset: string[];
    };
};

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;


export function Home() {

    const [coords, setCoords] = useState<Coords | undefined>(undefined);
    const [weather, setWeather] = useState<Weather | null>(null);
    const [city, setCity] = useState<string>("Chargement...");
    const currentWeather = weather ?.current;
    const nav = useNavigation<NavigationProp>();


    useEffect(() => {
        getUserCoords().catch(err => console.error(err));
    }, []);

    useEffect(() => {
        if (coords) {
            fetchWeather(coords).catch(err => console.error(err));
            fetchCity(coords).catch(err => console.error(err));
        }
    }, [coords]);


    // Fonction asynchrone pour obtenir les coordonnées de l'utilisateur via la géolocalisation du téléphone
    async function getUserCoords() {
        let {status} =  await requestForegroundPermissionsAsync()
        if (status === "granted") {
            const location = await getCurrentPositionAsync({});
            location.coords.latitude
            setCoords({ lat : location.coords.latitude , lon: location.coords.longitude})
        }else{
            setCoords({ lat : 48.8566, lon: 2.3522})
        }
    }

    // Fonction asynchrone pour récupérer les données météo à partir des coordonnées
    async function fetchWeather(coordinate: Coords){
        const weatherResponse = await MeteoAPI.fetchWeatherFromCoords(coordinate)
        setWeather(weatherResponse)
    }

    // Fonction asynchrone pour récupérer le nom de la ville
    async function fetchCity(coordinate: Coords){
        const cityName = await MeteoAPI.fetchCityFromCoords(coordinate)
        setCity(cityName)
    }

    // Fonction pour naviguer vers la page des prévisions météo
    function GotoForecast() {
        nav.navigate("ForeCast", { city, ...weather.daily });

    }

    return (
        <Container>
        <View className="flex-1">
            {currentWeather ? (
                <MeteoBasic temperature={Math.round(currentWeather.temperature_2m)} city={city}
                    interpretation={getWeatherInterpretation(currentWeather.weathercode, currentWeather.is_day)}
                    onPress={GotoForecast}
                />
            ) : (
                <View className="flex-1 items-center justify-center">
                    <Txt className="text-black text-xl">Chargement...</Txt>
                </View>
            )}
            {weather ? (
                <View className="flex-2">
                    <MeteoAdvanced wind={weather.current?.windspeed_10m}
                        dawn={weather.daily?.sunrise[0]?.split("T")[1]}
                        dusk={weather.daily?.sunset[0]?.split("T")[1]}
                    />
                </View>
            ) : null}
        </View>
        </Container>
    );
}
