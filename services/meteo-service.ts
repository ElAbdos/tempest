const WEATHER_INTERPRETATION = [
    {
        codes:[0],
        image: require("../assets/weather/day_clear.png"),
        label:"Ensoleillé"
    },
    {
        codes:[1,2,3,45,48],
        image: require("../assets/weather/angry_clouds.png"),
        label:"Nuageux"
    },
    {
        codes:[51,53,55,56,57,61,63,65,66,67,80,81,82,85,86],
        image: require("../assets/weather/rain.png"),
        label:"Pluvieux"
    },
    {
        codes:[71,73,75,77],
        image: require("../assets/weather/snow.png"),
        label:"Neigeux"
    },
    {
        codes:[96,99],
        image: require("../assets/weather/thunder.png"),
        label:"Orageux"
    }
]

//Fonction pour obtenir l'interprétation météo en fonction du code avec une recherche dans le tableau WEATHER_INTERPRETATION
export function getWeatherInterpretation(code: number){
    return WEATHER_INTERPRETATION.find((interpretation) => interpretation.codes.includes(code))
}