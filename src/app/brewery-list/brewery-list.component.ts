import { Component, OnInit } from "@angular/core";
import { BreweriesService } from "../breweries.service";
// import { delay } from "rxjs/operators";
// import { Observable } from "rxjs";
import { Brewery } from "../brewery";

@Component({
  selector: "app-brewery-list",
  templateUrl: "./brewery-list.component.html",
  styleUrls: ["./brewery-list.component.scss"]
})
export class BreweryListComponent implements OnInit {
  breweries: Brewery[] = [];
  query: string = "";
  selectedState: string = "";
  loading: boolean = false;

  constructor(private breweriesService: BreweriesService) {}

  ngOnInit() {}

  setQuery(query: string) {
    // this.breweries = [];
    this.query = query;
    this.loading = true;
    // if (!this.selectedState) {
    //   console.log(this.selectedState);
    this.getBreweries(this.query);
    // }
  }

  setState(selectedState: string) {
    this.selectedState = selectedState.toLowerCase();
    this.filterByState(this.selectedState, this.query);
    this.loading = true;
  }

  getBreweries(query: string): void {
    this.breweriesService.getBreweries(query).subscribe(breweries => {
      this.breweries = breweries;
      this.loading = false;
    });
  }

  filterByState(state: string, query: string): void {
    this.breweriesService
      .filterBy("by_state", state, query)
      .subscribe(breweries => {
        this.breweries = breweries;
        this.loading = false;
      });
  }
}
