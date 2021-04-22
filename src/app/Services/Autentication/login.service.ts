import { Injectable } from '@angular/core';
import { HttpClient,HttpErrorResponse, HttpHeaders } from "@angular/common/http";
import { UsersModel } from "src/app/Interfaces/IUsers";
import { Observable } from 'rxjs';
import { AuthModel } from 'src/app/Interfaces/IAuth';
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  ServerRegistroUsuario = 'https://localhost:5001/api/Login/';
  ServerAutenticacion = 'https://localhost:5001/api/Autentication/';
  statusSetLoginUnable:any;

  constructor(private httpRequest:HttpClient) { }

  getStatus():Observable<any>{
    return this.statusSetLoginUnable;
  }

  PostUserAutentication(credential:UsersModel):Observable<UsersModel>{
    
    return this.httpRequest.post<UsersModel>(this.ServerAutenticacion,credential);

  }
  PostUserRegister(user:UsersModel):Observable<UsersModel>{

    //this.statusSetLoginUnable = this.httpRequest.post<UsersModel>(this.ServerRegistroUsuario,user)

    return this.httpRequest.post<UsersModel>(this.ServerRegistroUsuario,user);
    
  }

  
}
