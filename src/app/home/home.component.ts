import { Component, OnInit } from "@angular/core";
import { WeatherService } from "../weather.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
  public weather: any;
  public cityName: string;
  public today: Date = new Date();
  constructor(private weatherService: WeatherService) {}

  async ngOnInit() {
    await this.getLocation();
    this.searchWeather();
  }

  async searchWeather() {
    this.weather = await this.weatherService.getActualWeather(this.cityName);
  }

  async getLocation() {
    const location: any = await this.weatherService.getMyLocation();
    this.cityName = location.city;
  }
}
