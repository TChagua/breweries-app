import { Component, OnInit } from '@angular/core'
import { RandomBeerService } from '../random-beer.service'
import { Beer } from '../beer'

@Component({
  selector: 'app-random-beer',
  templateUrl: './random-beer.component.html',
  styleUrls: ['./random-beer.component.scss'],
})
export class RandomBeerComponent implements OnInit {
  constructor(private rbService: RandomBeerService) {}
  beer: Beer

  ngOnInit(): void {
    this.getBeer()
  }

  getBeer() {
    this.rbService.getRandomBeer().subscribe((beers) => {
      this.beer = beers[0]
    })
  }
}
