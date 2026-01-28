export type Coords = {
    lat: number;
    lon: number;
};

export type Weather = {
    daily: {
        time: string[];
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
        windspeed_10m: number;
    }
};
