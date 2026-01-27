import axios from 'axios';
import { Coords } from "../pages/Home";
import { Weather } from "../pages/Home";


export class MeteoAPI {

    static async fetchWeatherFromCoords(coords: Coords): Promise<Weather> {
        const response = await axios.get<Weather>(
            `https://api.open-meteo.com/v1/forecast?latitude=${coords.lat}&longitude=${coords.lon}&daily=weathercode,temperature_2m_max,temperature_2m_min,sunrise,sunset&timezone=auto`
        );

        return response.data;
    }


}