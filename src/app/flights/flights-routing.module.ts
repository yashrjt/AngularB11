import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListFlightsComponent } from './list-flights/list-flights.component';
import { BookFlightsComponent } from './book-flights/book-flights.component';
import { FlightComponent } from './flight/flight.component';


const routes: Routes = [
  {path:'',component:FlightComponent,children:[
    {path:'display-flights',component:ListFlightsComponent},
    {path:'book-flights',component:BookFlightsComponent}
  ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FlightsRoutingModule { }
