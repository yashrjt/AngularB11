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

@NgModule({
  declarations: [
    AppComponent,
    CalculateBonusPipe,
    HomeComponent,
    AboutComponent,
   
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
