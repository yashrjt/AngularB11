import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';
import {CreateService} from '../services/create.service';
import { createOfflineCompileUrlResolver } from '@angular/compiler';

@Component({
  selector: 'app-update-flight',
  templateUrl: './update-flight.component.html',
  styleUrls: ['./update-flight.component.css']
})
export class UpdateFlightComponent implements OnInit {

  constructor(private r:ActivatedRoute,private fb:FormBuilder, private getData: CreateService) { }
  updateId:string;
  chosen:Array<any>;
  updateForm:FormGroup;
  name: String;
  destination:String;
  origin:String;


  ngOnInit() {
    console.log("the name is0: ", this.name);
    this.updateId=this.r.snapshot.params['code'];
    this.updateId=this.updateId.substring(1);

    this.getData.getFlight(this.updateId).toPromise().then(
      (res)=>{
      console.log("TCL: UpdateFlightComponent -> ngOnInit -> res", res)
        this.name=res['name'];
        this.destination=res['destination'];
        this.origin=res['origin'];
        this.updateForm = this.fb.group({
          code:[this.updateId],
          name:[this.name],
          origin:[this.origin],
          destination:[this.destination]
         })
      }
     );
  
}


}
