import { Component, OnInit, Input, OnChanges, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-list-flights',
  templateUrl: './list-flights.component.html',
  styleUrls: ['./list-flights.component.css']
})
export class ListFlightsComponent implements OnInit {

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
