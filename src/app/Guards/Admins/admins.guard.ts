import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from 'src/app/Services/Autentication/login.service';

@Injectable({
  providedIn: 'root'
})
export class AdminsGuard implements CanActivate {
  
  statusLogin: any;


  constructor(private autenticationAdmin: LoginService) { }

  canActivate():boolean{

  

   

    if( this.autenticationAdmin.IsUser_AdminLoggingIn()){
      
      return true;

    }else{
 
      return false;
    }


  }
  
}
