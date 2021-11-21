import weatherApiKey from './config';

class WeatherApi {
  constructor() {
    this.apiKey = weatherApiKey;
  }
}

const weatherApi = new WeatherApi();

export default weatherApi;
