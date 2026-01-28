import axios from 'axios';
import { Coords, Weather } from "../types/weather.types";


export class MeteoAPI {

    static async fetchWeatherFromCoords(coords: Coords): Promise<Weather> {
        const response = await axios.get<Weather>(
            `https://api.open-meteo.com/v1/forecast?latitude=${coords.lat}&longitude=${coords.lon}&current=temperature_2m,weathercode,is_day,windspeed_10m&daily=weathercode,temperature_2m_max,temperature_2m_min,sunrise,sunset&timezone=auto`
        );

        return response.data;
    }

    static async fetchCityFromCoords(coords: Coords): Promise<string> {
        const response = await axios.get<any>(
            `https://nominatim.openstreetmap.org/reverse?lat=${coords.lat}&lon=${coords.lon}&format=json`,
            {
                headers: {
                    'User-Agent': 'Tempest-Weather-App/1.0'
                }
            }
        );

        return response.data.address.city || response.data.address.town || response.data.address.village || "Location inconnue";
    }


}