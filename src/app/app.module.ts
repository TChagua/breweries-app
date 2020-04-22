import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { HttpClientModule } from '@angular/common/http'
import { ReactiveFormsModule, FormsModule } from '@angular/forms'
import { MatInputModule } from '@angular/material/input'
import { MatSelectModule } from '@angular/material/select'
import { MatRadioModule } from '@angular/material/radio'
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner'
import { MatCardModule } from '@angular/material/card'
import { MatButtonModule } from '@angular/material/button'
import { MatListModule } from '@angular/material/list'
import { MatIconModule } from '@angular/material/icon'
import { MatDividerModule } from '@angular/material/divider'
import { MatExpansionModule } from '@angular/material/expansion'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { BreweryListComponent } from './brewery-list/brewery-list.component'
import { HeaderComponent } from './header/header.component'
import { SearchBreweryComponent } from './search-brewery/search-brewery.component'
import { BreweryComponent } from './brewery/brewery.component'
import { RandomBeerComponent } from './random-beer/random-beer.component'

@NgModule({
  declarations: [
    AppComponent,
    BreweryListComponent,
    HeaderComponent,
    SearchBreweryComponent,
    BreweryComponent,
    RandomBeerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    MatProgressSpinnerModule,
    MatCardModule,
    MatButtonModule,
    MatListModule,
    MatIconModule,
    MatDividerModule,
    MatExpansionModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
