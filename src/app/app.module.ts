import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CalculateBonusPipe } from './pipes/calculate-bonus.pipe';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';

import { FlightsModule } from './flights/flights.module';

import {ReactiveFormsModule}  from '@angular/forms';
import { AuthModule } from './auth/auth.module';
import { HttpClientModule } from '@angular/common/http';
// import { CreateFlightsComponent } from './manage/create-flights/create-flights.component';
// import { DeleteFlightsComponent } from './manage/delete-flights/delete-flights.component';
// import { UpdateFlightsComponent } from './manage/update-flights/update-flights.component';
// import { DisplayFlightsComponent } from './manage/display-flights/display-flights.component';

@NgModule({
  declarations: [
    AppComponent,
    CalculateBonusPipe,
    HomeComponent,
    AboutComponent,
    // CreateFlightsComponent,
    // DeleteFlightsComponent,
    // UpdateFlightsComponent,
    // DisplayFlightsComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlightsModule,
    HttpClientModule,
    AuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
