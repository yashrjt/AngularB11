import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from '../services/login.service';

@Injectable({
  providedIn: 'root'
})
export class CanActivateGuard implements CanActivate {

  isUserLoggedIn:boolean;
  constructor(private loginService:LoginService,private router:Router){}
  
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean{

    this.loginService.userLoginObservable.subscribe(value=>{
    console.log("TCL: CanActivateGuard -> constructor -> value", value)
      this.isUserLoggedIn=value;
    })

    if( this.isUserLoggedIn){
      return true;
    }
    
    if(!this.isUserLoggedIn){
      this.router.navigate(['/signin']);
      return false;
    }
  }
  
}
