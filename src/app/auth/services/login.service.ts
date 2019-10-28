import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  //http calls fron frontend

  loginSucess:boolean=true;

  userLogin:BehaviorSubject<boolean>=new BehaviorSubject<boolean>(false);
  userLoginObservable= this.userLogin.asObservable();


  constructor(private router:Router) { }

  login(loginCredentails){
  console.log("TCL: LoginService -> login -> loginCredentails", loginCredentails);

  if(this.loginSucess){
    this.router.navigate(['']);
    this.userLogin.next(true);
  }
 

  }
}

// rxJs


// Subject-- is both an observable and observer
//beahvioursubject(initially takes some data),asynsubhect,replaysubject

// observable--stream of Data

// observer---subscribe/unsubscribe

