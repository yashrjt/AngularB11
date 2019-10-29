import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  //http calls fron frontend

  loginSucess:boolean=true;

  userLogin:BehaviorSubject<boolean>=new BehaviorSubject<boolean>(false);
  userLoginObservable= this.userLogin.asObservable();


  constructor(private router:Router,private http:HttpClient) { }
  headers = new HttpHeaders({ 'Content-Type': 'application/json' });

  login(loginCredentails){
  console.log("TCL: LoginService -> login -> loginCredentails", loginCredentails);
//http calls
 //Get--used to get data from the server
//post--create a new resource
//put ---update an existing resource
//delete--delete an existing resource

  return this.http.post('http://localhost:3000/api/user/login',loginCredentails,{headers:this.headers}).pipe(      
    map((res) =>{ 
      if(res) {
        //store the jwt(json web token) in the localstorage
        localStorage.setItem('token',res['token']);
        this.router.navigate(['']);
        this.userLogin.next(true);
      }   
      return res;
    }),
    catchError((err)=>{
    return err;
    })     
   );

  }

  logout(){
    this.userLogin.next(false);
    this.router.navigate(['/signin']);
    localStorage.removeItem('token');
  }
}

// rxJs


// Subject-- is both an observable and observer
//beahvioursubject(initially takes some data),asynsubhect,replaysubject

// observable--stream of Data

// observer---subscribe/unsubscribe

