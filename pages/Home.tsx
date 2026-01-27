import "../global.css";
import {Text, View} from "react-native";
import {getCurrentPositionAsync, requestForegroundPermissionsAsync} from "expo-location";
import {useEffect, useState} from "react";
import {MeteoAPI} from "../api/meteo";
import {Txt} from "../components/Txt";

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
};


export function Home() {

    const [coords, setCoords] = useState<Coords | undefined>(undefined);
    const [weather, setWeather] = useState<Weather | null>(null);


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

    async function fetchWeather(coordinate: Coords){
        const weatherResponse = await MeteoAPI.fetchWeatherFromCoords(coordinate)
        setWeather(weatherResponse)
    }
    return (
        <>
            <View className="flex-2">
                <Txt className="text-lg text-red-700">Météo</Txt>
                <Text className="text-lg text-yellow-500">Hoho test</Text>
            </View>

            <View className="flex-2" />
            <View className="flex-1" />
        </>
    );
}
