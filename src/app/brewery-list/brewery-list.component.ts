import { Component, OnInit } from "@angular/core";
import { BreweriesService } from "../breweries.service";
import { Brewery } from "../brewery";

@Component({
  selector: "app-brewery-list",
  templateUrl: "./brewery-list.component.html",
  styleUrls: ["./brewery-list.component.scss"]
})
export class BreweryListComponent implements OnInit {
  breweries: Brewery[] = [];
  query: string = "";
  loading: boolean = false;

  constructor(private breweriesService: BreweriesService) {}

  ngOnInit() {}

  setQuery(query: string) {
    this.query = query;
    this.loading = true;
    this.getBreweries(this.query);
  }

  setState(selectedState: string) {
    this.filterByState(selectedState, this.query);
    this.loading = true;
  }

  setType(selectedType: string) {
    this.filterByType(selectedType, this.query);
    this.loading = true;
  }

  getBreweries(query: string): void {
    this.breweriesService.getBreweries(query).subscribe(breweries => {
      this.breweries = breweries;
      this.loading = false;
    });
  }

  filterByState(state: string, query: string): void {
    this.breweriesService.filterBy("by_state", state, query).subscribe(breweries => {
      this.breweries = breweries;
      this.loading = false;
    });
  }

  filterByType(type: string, query: string): void {
    this.breweriesService.filterBy("by_type", type, query).subscribe(breweries => {
      this.breweries = breweries;
      this.loading = false;
    });
  }
}
