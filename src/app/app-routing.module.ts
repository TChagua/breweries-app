import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { BreweryListComponent } from './brewery-list/brewery-list.component'
import { DashboardComponent } from './dashboard/dashboard.component'

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'breweries', component: BreweryListComponent },
  { path: '', redirectTo: '/breweries', pathMatch: 'full' },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
