import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManageRoutingModule } from './manage-routing.module';
import { CreateFlightsComponent } from './create-flights/create-flights.component';
import { DeleteFlightsComponent } from './delete-flights/delete-flights.component';
import { UpdateFlightsComponent } from './update-flights/update-flights.component';
import { DisplayFlightsComponent } from './display-flights/display-flights.component';
import { ManageComponent } from './manage/manage.component';
import {ReactiveFormsModule}  from '@angular/forms';
import { UpdateFlightComponent } from './update-flight/update-flight.component';


@NgModule({
  declarations: [CreateFlightsComponent, DeleteFlightsComponent, UpdateFlightsComponent, DisplayFlightsComponent, ManageComponent, UpdateFlightComponent],
  imports: [
    CommonModule,
    ManageRoutingModule,
    ReactiveFormsModule
  ]
})
export class ManageModule { }
