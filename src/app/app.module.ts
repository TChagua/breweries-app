import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BreweryListComponent } from './brewery-list/brewery-list.component';
import { HeaderComponent } from './header/header.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SearchBreweryComponent } from './search-brewery/search-brewery.component';
import { BreweryComponent } from './brewery/brewery.component';

@NgModule({
  declarations: [
    AppComponent,
    BreweryListComponent,
    HeaderComponent,
    DashboardComponent,
    SearchBreweryComponent,
    BreweryComponent
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
