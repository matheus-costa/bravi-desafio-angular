import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class WeatherService {
  constructor(private httpClient: HttpClient) {}

  async getMyLocation() {
    const myLocation = await this.httpClient.get(
      "https://ipinfo.io/json?token=1a54598882ff30"
    );
    return myLocation.toPromise();
  }

  async getActualWeather(cityName: string) {
    const dataWeather = await this.httpClient.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&APPID=31be0ea9410614f92fd6864954d62bcd&units=metric`
    );
    dataWeather.subscribe(
      response => {},
      error => {
        alert("Cidade não encontrada.");
        return null;
      }
    );
    return dataWeather.toPromise();
  }
}
