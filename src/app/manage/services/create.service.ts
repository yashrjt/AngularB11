import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, observable, throwError } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})


export class CreateService {

  //http calls fron frontend

  loginSucess:boolean=true;

  userLogin:BehaviorSubject<boolean>=new BehaviorSubject<boolean>(false);
  userLoginObservable= this.userLogin.asObservable();


  constructor(private router:Router,private http:HttpClient) { }
  headers = new HttpHeaders({ 'Content-Type': 'application/json' });

  create(createCredentails){
    console.log("TCL: CreateService -> create -> CreateCredentails", createCredentails);


    return this.http.post('http://localhost:3000/api/flights/createFlight',createCredentails,{headers:this.headers}).pipe(      
      map((res) =>{ 
      if(res) {
        //
        //no token responded here
        //
        this.router.navigate(['manage']);
      }   
      return res;
      }),
      catchError((err)=>{
        return err;
      })     
    );

  }

  getFlightDetails(){

    return this.http.get('http://localhost:3000/api/flights/getAllFlights').pipe(
        map(res=>{
          if(res){
            //this.router.navigate(['manage']);
          }
            return res;
        }),
        catchError((err) => 
        {
            return throwError(err);
        })
    )
}

deleteFlight(deleteCom:string){
    var url = "http://localhost:3000/api/flights/deleteFlight/"+deleteCom;
    return this.http.delete(url).pipe(      
      map((res) =>{ 
        return res;
      }),
      catchError((err)=>{
      return err;
      })     
     );
}

updateFlight(code, updateCon){
    var url="http://localhost:3000/api/flights/updateFlight/"+code;
    console.log(url);
    console.log(updateCon);
    this.http.patch(url, updateCon, {headers:this.headers})
    .subscribe(
        (val) => {
            console.log("PATCH call successful value returned in body", val);
            this.router.navigate(['manage']);
        },
        response => {
            console.log("PATCH call in error", response);
        },
        () => {
            console.log("The PATCH observable is now completed.");
        });
}


}

