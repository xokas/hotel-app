import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ReservationFormComponent } from './reservation-form/reservation-form.component';
import { ReservationListComponent } from './reservation-list/reservation-list.component';

const routes: Routes = [
  {path:"", component: HomeComponent}, // defining the default path '/'
  {path:"list", component: ReservationListComponent}, // defining the path 'list'
  {path:"new", component: ReservationFormComponent}, // defining the path 'new'
  {path:"edit/:id", component: ReservationFormComponent} // defining the path 'edit'
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
