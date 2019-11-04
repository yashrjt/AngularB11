import { Injectable } from '@angular/core';
import {HttpInterceptor,HttpRequest,HttpHandler,HttpEvent, HttpHeaders}  from '@angular/common/http';
import {Observable}  from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptorService implements HttpInterceptor {

  constructor() { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{
  console.log("TCL: AuthInterceptorService -> constructor -> req", req)

    const token=localStorage.getItem('token');

    if(token){
      const clonedReq=req.clone({
        headers: req.headers.set('x-access-token',token)
      })

      console.log("TCL: AuthInterceptorService -> constructor -> clonedReq", clonedReq)
      return next.handle(clonedReq);
    }
    else{
      return next.handle(req);
    }
   
  }
}
