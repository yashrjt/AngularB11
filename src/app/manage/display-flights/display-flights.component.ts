import { Component, OnInit } from '@angular/core';
import {CreateService} from '../services/create.service';

@Component({
  selector: 'app-display-flights',
  templateUrl: './display-flights.component.html',
  styleUrls: ['./display-flights.component.css']
})

export class DisplayFlightsComponent implements OnInit {
  flyArr: Array<any>=[];

  constructor( private flights:CreateService) { }

  ngOnInit() {
    this.getFlightList();
  }

  getFlightList(){
    this.flights.getFlightDetails().subscribe((res=>{
      for(let i in res){
        this.flyArr.push(res[i]);
      }
    }),
    (err)=>{
      console.log("array parsing error", err)
    });
  }

}