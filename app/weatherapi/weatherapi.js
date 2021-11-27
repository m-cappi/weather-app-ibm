import axios from "axios";
import weatherApiKey from "./config";

class WeatherApi {
    constructor() {
        this.apiKey = weatherApiKey;
    }

    currentWeather(city) {
        //City name, state code and country code divided by comma, use ISO 3166 country codes. You can specify the parameter not only in English.
        return axios.get(
            `https://api.openweathermap.org/data/2.5/weather?q=${encodeURI(
                city
            )}&appid=${this.apiKey}&lang=es&units=metric`
        );
    }

    getIcon(icon) {
        //at .weather.icon
        return `https://openweathermap.org/img/wn/${icon}@2x.png`;
    }

    getLargeIcon(icon) {
        //at .weather.icon
        return `https://openweathermap.org/img/wn/${icon}@4x.png`;
    }

    getDirection(angle) {
        const directions = ["N", "NE", "E", "SE", "S", "SW", "W", "NW"];
        const index =
            Math.round(((angle %= 360) < 0 ? angle + 360 : angle) / 45) % 8;
        return directions[index];
    }
}

const weatherApi = new WeatherApi();

export default weatherApi;
