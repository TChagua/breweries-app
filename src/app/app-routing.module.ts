import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { BreweryListComponent } from './brewery-list/brewery-list.component'
import { RandomBeerComponent } from './random-beer/random-beer.component'

const routes: Routes = [
  { path: 'breweries', component: BreweryListComponent },
  { path: 'random', component: RandomBeerComponent },
  { path: '', redirectTo: '/breweries', pathMatch: 'full' },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
