import { Component, Output, EventEmitter, OnInit } from '@angular/core'
import { FormBuilder, Validators } from '@angular/forms'
import { debounceTime } from 'rxjs/operators'

@Component({
  selector: 'app-search-brewery',
  templateUrl: './search-brewery.component.html',
  styleUrls: ['./search-brewery.component.scss'],
})
export class SearchBreweryComponent implements OnInit {
  constructor(private fb: FormBuilder) {}
  states: string[] = [
    'Alabama',
    'Alaska',
    'Arizona',
    'Arkansas',
    'California',
    'Colorado',
    'Connecticut',
    'Delaware',
    'Florida',
    'Georgia',
    'Hawaii',
    'Idaho',
    'Illinois',
    'Indiana',
    'Iowa',
    'Kansas',
    'Kentucky',
    'Louisiana',
    'Maine',
    'Maryland',
    'Massachusetts',
    'Michigan',
    'Minnesota',
    'Mississippi',
    'Missouri',
    'Montana',
    'Nebraska',
    'Nevada',
    'New Hampshire',
    'New Jersey',
    'New Mexico',
    'New York',
    'North Carolina',
    'North Dakota',
    'Ohio',
    'Oklahoma',
    'Oregon',
    'Pennsylvania',
    'Rhode Island',
    'South Carolina',
    'South Dakota',
    'Tennessee',
    'Texas',
    'Utah',
    'Vermont',
    'Virginia',
    'Washington',
    'West Virginia',
    'Wisconsin',
    'Wyoming',
  ]

  types: string[] = ['micro', 'regional', 'brewpub', 'large', 'planning']
  tags: string[] = ['pet-friendly', 'patio', 'board-games']

  @Output() valueChange = new EventEmitter()
  @Output() selectChange = new EventEmitter()
  @Output() typeChange = new EventEmitter()

  searchBrewery = this.fb.group({
    query: ['', [Validators.minLength(3), Validators.required]],
    selectedState: [''],
    type: [''],
    selectedTag: ['', [Validators.required]],
  })

  ngOnInit() {
    this.searchBrewery
      .get('query')
      .valueChanges.pipe(debounceTime(400))
      .subscribe((value: string) => {
        if (this.searchBrewery.valid) {
          this.valueChange.emit(value)
        }
      })

    this.searchBrewery
      .get('selectedState')
      .valueChanges.subscribe((value: string) => {
        if (this.searchBrewery.valid) {
          this.selectChange.emit(value)
        }
      })

    this.searchBrewery.get('type').valueChanges.subscribe((value: string) => {
      if (this.searchBrewery.valid) {
        this.typeChange.emit(value)
      }
    })

    this.searchBrewery
      .get('selectedTag')
      .valueChanges.subscribe((value: string) => {
        console.log(value)
      })
  }
}
