import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FlightsRoutingModule } from './flights-routing.module';
import { BookFlightsComponent } from './book-flights/book-flights.component';
import { ListFlightsComponent } from './list-flights/list-flights.component';
import { FlightComponent } from './flight/flight.component';


@NgModule({
  declarations: [BookFlightsComponent,ListFlightsComponent, FlightComponent],
  imports: [
    CommonModule,
    FlightsRoutingModule
  ],
  exports:[BookFlightsComponent,ListFlightsComponent,FlightComponent]
})
export class FlightsModule { }
