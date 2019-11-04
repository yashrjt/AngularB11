import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import {CreateService} from '../services/create.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-flights',
  templateUrl: './update-flights.component.html',
  styleUrls: ['./update-flights.component.css']
})
export class UpdateFlightsComponent implements OnInit {

  updateForm:FormGroup;
  flyArr: Array<Object>=[];


  constructor( private fb:FormBuilder, private getData: CreateService, private flights:CreateService,private router:Router ) { }

  ngOnInit() {
    this.getFlightList();
    }
    
    getFlightList(){
    this.flights.getFlightDetails().subscribe((res=>{
        console.log(res);
        console.log(Object.prototype.toString.call(res));
        this.flyArr = JSON.parse(JSON.stringify(res));
    // for(let i in res){
    // this.flyArr.push(res[i]);
    // }
    }),
    (err)=>{
    console.log("array parsing error", err)
    });
    }

  // ngOnInit() {
  //   this.updateForm = this.fb.group({
  //     code:[''],
  //     name:[''],
  //     origin:[''],
  //     destination:['']
  //   })
  // }

  // update(){
  //   if( !this.updateForm.valid ){
  //     this.updateForm.markAllAsTouched();
  //     return;
  //   }
  //   else{
  //     var code = this.updateForm.get('code').value;
  //     this.updateForm.removeControl('code');
  //     this.getData.updateFlight( code, JSON.stringify(this.updateForm.value));
  //   }
    
  // }

  update(aircode){
    const url='manage/update-flight/:'+aircode
    console.log("TCL: UpdateFlightsComponent -> update -> url", url)
   this.router.navigate([url]);
  }

}