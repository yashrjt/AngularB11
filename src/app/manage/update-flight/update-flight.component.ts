import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';
import {CreateService} from '../services/create.service';

@Component({
  selector: 'app-update-flight',
  templateUrl: './update-flight.component.html',
  styleUrls: ['./update-flight.component.css']
})
export class UpdateFlightComponent implements OnInit {

  constructor(private r:ActivatedRoute,private fb:FormBuilder, private getData: CreateService) { }
  updateId:string;
  updateForm:FormGroup;

  ngOnInit() {
   
   this.updateId=this.r.snapshot.params['code'];
   this.updateId=this.updateId.substring(1);
   console.log("TCL: UpdateFlightComponent -> ngOnInit ->  this.updateId",  this.updateId)
  
   this.updateForm = this.fb.group({
        code:[this.updateId],
        name:[''],
        origin:[''],
        destination:['']
       })
  

}

}
