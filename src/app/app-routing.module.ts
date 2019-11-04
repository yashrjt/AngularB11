import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent}  from './home/home.component';
import { LoginComponent } from './auth/login/login.component';
import { AboutComponent } from './about/about.component';
import {FlightComponent} from './flights/flight/flight.component';
import { CanActivateGuard } from './auth/Guards/can-activate.guard';
//import { ManageComponent } from './manage/manage/manage.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
   {path:'about',component:AboutComponent},
   {path:'flights',loadChildren:'./flights/flights.module#FlightsModule',canActivate:[CanActivateGuard]},
 {path:'signin',component:LoginComponent},

 {path:'manage',loadChildren:'./manage/manage.module#ManageModule',canActivate:[CanActivateGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


