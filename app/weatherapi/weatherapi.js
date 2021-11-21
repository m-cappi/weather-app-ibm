import axios from 'axios';
import weatherApiKey from './config';

class WeatherApi {
  constructor() {
    this.apiKey = weatherApiKey;
  }

  async currentWeather(city) {
    //City name, state code and country code divided by comma, use ISO 3166 country codes. You can specify the parameter not only in English.
    return await axios.get(
      `api.openweathermap.org/data/2.5/weather?q=${city}&appid=${this.apiKey}&lang=es&units=metric`,
    );
  }

  async getIcon(icon) {
    return await axios.get(`http://openweathermap.org/img/wn/${icon}@2x.png`);
  }

  async getLargeIcon(icon) {
    return await axios.get(`http://openweathermap.org/img/wn/${icon}@4x.png`);
  }
}

const weatherApi = new WeatherApi();

export default weatherApi;
