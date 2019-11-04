import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ManageComponent } from './manage/manage.component';
import { CreateFlightsComponent } from './create-flights/create-flights.component';
import { DeleteFlightsComponent } from './delete-flights/delete-flights.component';
import { UpdateFlightsComponent } from './update-flights/update-flights.component';
import { UpdateFlightComponent } from './update-flight/update-flight.component';
import { DisplayFlightsComponent } from './display-flights/display-flights.component';

const routes: Routes = [
  {path:'',component:ManageComponent,children:[
    {path:'create-flights',component:CreateFlightsComponent},
    {path:'delete-flights',component:DeleteFlightsComponent},
    {path:'update-flights',component:UpdateFlightsComponent},
    {path:'update-flight/:code',component:UpdateFlightComponent},
    {path:'display-flights',component:DisplayFlightsComponent}
  ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManageRoutingModule { }
