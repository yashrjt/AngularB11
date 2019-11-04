import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, ViewChildren, QueryList, OnDestroy } from '@angular/core';

import {Employee}  from './Employee';
import { LoginService } from './auth/services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit,AfterViewInit,OnDestroy{

  sum:number;
  title:string = null;
  flag:boolean;
  arr:Array<string>;
  empArr:Array<Employee>;
  //randomVar:any;
  image:string;
  name:string;
  flightsArr:Array<any>;

  signedIn:boolean;

  constructor(private loginservice:LoginService,private router:Router){
    
  }

  @ViewChild('content',{static:false}) randomVar:ElementRef;

  @ViewChildren('cities') city:QueryList<ElementRef>;

  @ViewChildren('pname')
  persons: QueryList<ElementRef>;
  loginSubscription;

  ngOnInit(){

    if(!!localStorage.getItem('token')){
     this.loginservice.userLogin.next(true);
    }
    this.loginSubscription=this.loginservice.userLoginObservable.subscribe((value)=>{
    console.log("TCL: AppComponent -> ngOnInit -> value", value)
        this.signedIn=value;
    })

    console.log('app comp initialized');
    this.sum=this.addNumbers(10,20);
    console.log("TCL: AppComponent -> constructor ->  this.sum",  this.sum)
    this.title='Chicago';
    this.flag=false;
    this.name='Lei';
    this.image='../assets/Bitcoin-Landing-page-Design-Template-psd-950x1333.jpg';

    this.empArr=[
      {
      name:'John',
      age:30,
      dateJoined:new Date(),
      salary:50000
      },
      {
        name:'Alex',
        age:35,
        dateJoined:new Date(),
        salary:30000
      },
      {
        name:'Albert',
        age:25,
        dateJoined:new Date(),
       salary:25000
      }
    ]

    this.flightsArr=[
      {
        flightNo:'ghf1hg23',
        city:'Orlando',
        passengers:500

      },
      {
        flightNo:'Qwe1876',
        city:'Chiacgo',
        passengers:300

      },
      {
        flightNo:'Piuy211',
        city:'Dallas',
        passengers:200

      }
    ]

   }

    ngAfterViewInit(){
     // console.log('After view init',this.randomVar.nativeElement.innerHTML);
    // this.city.forEach(el => console.log(el.nativeElement.innerHTML));
   
    }
  
    addNumbers(a:number,b:number):number{
      return a+b;
    }


  save(){
    console.log('You clicked the button');
    this.flag=!this.flag;
  }

  handleSelectedFlight($event){
  console.log("TCL: AppComponent -> handleSelectedFlight -> $event", $event)
    
  }

  signout(){
    this.loginservice.logout();
  }

  ngOnDestroy(){
    this.loginSubscription.unsubscribe();
  }
}


