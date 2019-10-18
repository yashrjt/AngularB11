import { Component, OnInit, Input, OnChanges, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-flights',
  templateUrl: './flights.component.html',
  styleUrls: ['./flights.component.css']
})
export class FlightsComponent implements OnInit,OnChanges {

  
  @Input('flights') flightInput:Array<any>;
  @Output() flightSelected :EventEmitter<any> =new EventEmitter();
  constructor() { }

  ngOnChanges(){
    console.log(this.flightInput);
  }
  ngOnInit() {
  
  }
  selectFlight(item){
  this.flightSelected.emit(item);
  }

}
