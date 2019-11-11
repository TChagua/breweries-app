import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Brewery } from './brewery';

@Injectable({
  providedIn: 'root'
})
export class BreweriesService {
  private baseUrl = 'https://api.openbrewerydb.org/breweries?by_name=';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) {}

  getBreweries(query: string): Observable<Brewery[]> {
    return this.http.get<Brewery[]>(`${this.baseUrl}${query}`, this.httpOptions);
  }

  filterBy(filterType: string, term: string) {
    return this.http.get(`${this.baseUrl}?${filterType}=${term}`);
  }
}
