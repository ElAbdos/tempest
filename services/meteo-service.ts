const DAY_WEATHER = [
    {
        codes: [0],
        image: require("../assets/weather/day_clear.png"),
        label: "Ensoleillé"
    },
    {
        codes: [1, 2, 3, 45, 48],
        image: require("../assets/weather/angry_clouds.png"),
        label: "Nuageux"
    },
    {
        codes: [51, 53, 55, 56, 57, 61, 63, 65, 66, 67, 80, 81, 82, 85, 86],
        image: require("../assets/weather/rain.png"),
        label: "Pluvieux"
    },
    {
        codes: [71, 73, 75, 77],
        image: require("../assets/weather/snow.png"),
        label: "Neigeux"
    },
    {
        codes: [95, 96, 99],
        image: require("../assets/weather/thunder.png"),
        label: "Orageux"
    }
];

const NIGHT_WEATHER = [
    {
        codes: [0],
        image: require("../assets/weather/night_half_moon_clear.png"),
        label: "Nuit claire"
    },
    {
        codes: [1, 2, 3, 45, 48],
        image: require("../assets/weather/night_half_moon_partial_cloud.png"),
        label: "Nuageux"
    },
    {
        codes: [51, 53, 55, 56, 57, 61, 63, 65, 66, 67, 80, 81, 82, 85, 86],
        image: require("../assets/weather/night_half_moon_rain.png"),
        label: "Pluvieux"
    },
    {
        codes: [71, 73, 75, 77],
        image: require("../assets/weather/night_half_moon_snow.png"),
        label: "Neigeux"
    },
    {
        codes: [95, 96, 99],
        image: require("../assets/weather/night_half_moon_rain_thunder.png"),
        label: "Orageux"
    }
];

// Fonction pour obtenir l'interprétation météo en fonction du code et de l'heure (jour/nuit)
export function getWeatherInterpretation(code: number, isDay: number = 1) {
    const weatherList = isDay === 1 ? DAY_WEATHER : NIGHT_WEATHER;
    return weatherList.find((interpretation) => interpretation.codes.includes(code));
}
