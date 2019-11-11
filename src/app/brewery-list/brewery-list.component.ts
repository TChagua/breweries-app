import { Component, OnInit } from '@angular/core';
import { BreweriesService } from '../breweries.service';
import { tap, take, filter, map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Brewery } from '../brewery';

@Component({
  selector: 'app-brewery-list',
  templateUrl: './brewery-list.component.html',
  styleUrls: ['./brewery-list.component.scss']
})
export class BreweryListComponent implements OnInit {
  breweries: Brewery[] = [];
  query: string = '';
  loading: boolean = false;

  constructor(private breweriesService: BreweriesService) {}

  ngOnInit() {}

  setQuery(query: string) {
    this.breweries = [];
    this.query = query;
    this.loading = true;
    this.getBreweries(this.query);
  }

  getBreweries(query: string): void {
    this.breweriesService.getBreweries(query).subscribe(breweries => {
      this.breweries = breweries;
      this.query = '';
      this.loading = false;
    });
  }
}
