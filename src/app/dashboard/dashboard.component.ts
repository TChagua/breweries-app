import { Component, OnInit } from "@angular/core";
import { BreweriesService } from "../breweries.service";
import { Brewery } from "../brewery";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.scss"]
})
export class DashboardComponent implements OnInit {
  favorites: Brewery[] = [];

  constructor(private breweriesService: BreweriesService) {}

  ngOnInit() {
    this.getBreweries();
  }

  getBreweries(): void {
    this.breweriesService
      .getBreweries()
      .subscribe(
        breweries => (this.favorites = breweries.filter(item => item.id > 7000))
      );
  }
}
