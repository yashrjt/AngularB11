import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {CreateService} from '../services/create.service';

@Component({
  selector: 'app-create-flights',
  templateUrl: './create-flights.component.html',
  styleUrls: ['./create-flights.component.css']
})
export class CreateFlightsComponent implements OnInit {

  createForm:FormGroup;

  constructor(private fb:FormBuilder,private createservice:CreateService) { }

  ngOnInit() {
    this.createForm= this.fb.group({
      name:['',[Validators.required]],
      origin:['',[Validators.required]],
      destination:['',[Validators.required]],
      code:['',[Validators.required]]
    })
  }

  create(){
    console.log("jin");
    
    if( !this.createForm.valid ){
      this.createForm.markAllAsTouched();
      return;
    }
    else{
      
      this.createservice.create(JSON.stringify(this.createForm.value)).subscribe(val=>{
      console.log("TCL: CreateComponent -> login -> val", val)
        });
    }
     
    this.createForm.reset();
  }

}
