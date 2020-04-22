import { Injectable } from '@angular/core'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs'
import { Beer } from './beer'

@Injectable({
  providedIn: 'root',
})
export class RandomBeerService {
  private apiUrl = 'https://api.punkapi.com/v2/beers/random'

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  }

  constructor(private http: HttpClient) {}

  getRandomBeer(): Observable<Beer[]> {
    return this.http.get<Beer[]>(this.apiUrl, this.httpOptions)
  }
}
