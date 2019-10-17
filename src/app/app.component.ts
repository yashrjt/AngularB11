import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, ViewChildren, QueryList } from '@angular/core';

import {Employee}  from './Employee';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit,AfterViewInit{

  sum:number;
  title:string = null;
  flag:boolean;
  arr:Array<string>;
  empArr:Array<Employee>;
  //randomVar:any;
  image:string;
  name:string;
  
  constructor(){
    
  }

  @ViewChild('content',{static:false}) randomVar:ElementRef;

  @ViewChildren('cities') city:QueryList<string>;

  ngOnInit(){
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
      age:30
      },
      {
        name:'Alex',
        age:35
      },
      {
        name:'Albert',
        age:25
      }
    ]
   }

    ngAfterViewInit(){
      console.log('After view init',this.randomVar.nativeElement.innerHTML);
      console.log(this.city);
    }
  
    addNumbers(a:number,b:number):number{
      return a+b;
    }


  save(){
    console.log('You clicked the button');
    this.flag=!this.flag;
  }
}


