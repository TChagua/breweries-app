import { Component, OnInit } from "@angular/core";
import { BreweriesService } from "../breweries.service";
import { Brewery } from "../brewery";

@Component({
  selector: "app-brewery-list",
  templateUrl: "./brewery-list.component.html",
  styleUrls: ["./brewery-list.component.scss"]
})
export class BreweryListComponent implements OnInit {
  breweries: Brewery[];

  constructor(private breweriesService: BreweriesService) {}

  ngOnInit() {
    this.getBreweries();
  }

  getBreweries(): void {
    this.breweriesService
      .getBreweries()
      .subscribe(breweries => (this.breweries = breweries));
  }
}
