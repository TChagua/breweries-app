import { Component, Input, Output, EventEmitter } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: "app-search-brewery",
  templateUrl: "./search-brewery.component.html",
  styleUrls: ["./search-brewery.component.scss"]
})
export class SearchBreweryComponent {
  constructor(private fb: FormBuilder) {}
  states: string[] = [
    "Alabama",
    "Alaska",
    "Arizona",
    "Arkansas",
    "California",
    "Colorado",
    "Connecticut",
    "Delaware",
    "Florida",
    "Georgia",
    "Hawaii",
    "Idaho",
    "Illinois",
    "Indiana",
    "Iowa",
    "Kansas",
    "Kentucky",
    "Louisiana",
    "Maine",
    "Maryland",
    "Massachusetts",
    "Michigan",
    "Minnesota",
    "Mississippi",
    "Missouri",
    "Montana",
    "Nebraska",
    "Nevada",
    "New Hampshire",
    "New Jersey",
    "New Mexico",
    "New York",
    "North Carolina",
    "North Dakota",
    "Ohio",
    "Oklahoma",
    "Oregon",
    "Pennsylvania",
    "Rhode Island",
    "South Carolina",
    "South Dakota",
    "Tennessee",
    "Texas",
    "Utah",
    "Vermont",
    "Virginia",
    "Washington",
    "West Virginia",
    "Wisconsin",
    "Wyoming"
  ];

  @Input() selectedState: string = "";
  @Input() query: string = "";
  @Output() valueChange = new EventEmitter();
  @Output() selectChange = new EventEmitter();

  searchBrewery = this.fb.group({
    query: ["", [Validators.minLength(3), Validators.required]],
    selectedState: [""]
  });

  onQueryChange(): void {
    this.query = this.searchBrewery.controls["query"].value;
    this.valueChange.emit(this.query);
  }

  onStateChange(): void {
    this.selectedState = this.searchBrewery.controls["selectedState"].value;
    this.selectChange.emit(this.selectedState);
  }
}
