import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Brewery } from './brewery';

@Injectable({
  providedIn: 'root'
})
export class BreweriesService {
  private url = 'https://api.openbrewerydb.org/breweries?by_type=brewpub&by_name=dog';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) {}

  getBreweries(): Observable<Brewery[]> {
    return this.http.get<Brewery[]>(this.url);
  }
}
