import { Coords, Weather } from "../types/weather.types";


export class MeteoAPI {

    static async fetchWeatherFromCoords(coords: Coords): Promise<Weather> {
        const response = await fetch(
            `https://api.open-meteo.com/v1/forecast?latitude=${coords.lat}&longitude=${coords.lon}&current=temperature_2m,weather_code,is_day,windspeed_10m&daily=weather_code,temperature_2m_max,temperature_2m_min,sunrise,sunset&timezone=auto`
        );
        return await response.json() as Weather;
    }

    static async fetchCityFromCoords(coords: Coords): Promise<string> {
        const response = await fetch(
            `https://nominatim.openstreetmap.org/reverse?lat=${coords.lat}&lon=${coords.lon}&format=json`,
            {
                headers: {
                    'User-Agent': 'Tempest-Weather-App/1.0'
                }
            }
        );
        const data = await response.json();
        return data.address.city || data.address.town || data.address.village || "Location inconnue";
    }

    static async searchCity(query: string): Promise<{ name: string; lat: number; lon: number; country: string }[]> {
        const response = await fetch(
            `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(query)}&count=5&language=fr`
        );
        const data = await response.json();
        return data.results || [];
    }

}
