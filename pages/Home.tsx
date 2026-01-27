import "../global.css";
import {Text, View} from "react-native";
import {getCurrentPositionAsync, requestForegroundPermissionsAsync} from "expo-location";
import {useEffect, useState} from "react";
import {MeteoAPI} from "../api/meteo";
import {Txt} from "../components/Txt";
import {MeteoBasic} from "../components/MeteoBasic";
import {getWeatherInterpretation} from "../services/meteo-service";

export type Coords = {
    lat: number;
    lon: number;
};

export type Weather = {
    daily: {
        temperature_2m_max: number[];
        temperature_2m_min: number[];
        weathercode: number[];
        sunrise: string[];
        sunset: string[];
    };
    current: {
        time: string;
        interval: number;
        temperature_2m: number;
        is_day: number;
        weathercode: number;
    }
};


export function Home() {

    const [coords, setCoords] = useState<Coords | undefined>(undefined);
    const [weather, setWeather] = useState<Weather | null>(null);
    const currentWeather = weather ?.current;


    useEffect(() => {
        getUserCoords().catch(err => console.error(err)); // Appel de la fonction asynchrone avec gestion des erreurs pour éviter le warning
    }, []);

    useEffect(() => {
        if (coords) {
            fetchWeather(coords).catch(err => console.error(err)); // Appel de la fonction asynchrone avec gestion des erreurs pour éviter le warning
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
    return (
        <View className="flex-1">
            {currentWeather ? (
                <MeteoBasic
                    temperature={Math.round(currentWeather.temperature_2m)}
                    city="Todo"
                    interpretation={getWeatherInterpretation(currentWeather.weathercode)}
                />
            ) : (
                <View className="flex-1 items-center justify-center">
                    <Txt className="text-black text-xl">Chargement...</Txt>
                </View>
            )}
        </View>
    );
}
