import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-search-brewery',
  templateUrl: './search-brewery.component.html',
  styleUrls: ['./search-brewery.component.scss']
})
export class SearchBreweryComponent {
  @Input() query: string = '';
  @Output() valueChange = new EventEmitter();

  searchBrewery = new FormGroup({
    query: new FormControl('', [Validators.minLength(3)])
  });

  onSubmit(): void {
    this.query = this.searchBrewery.controls.query.value;
    this.valueChange.emit(this.query);
    this.searchBrewery.reset();
  }
}
