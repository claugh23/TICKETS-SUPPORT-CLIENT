import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { UsersModel } from "src/app/Interfaces/IUsers";
import { Observable } from 'rxjs';
import { AuthModel } from 'src/app/Interfaces/IAuth';
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  ServerRegistroUsuario = 'https://localhost:5001/api/Users/';
  ServerAutenticacion = 'https://localhost:5001/api/Autentication/';
  constructor(private httpRequest:HttpClient) { }


  PostUser(user:UsersModel):Observable<UsersModel>{

    return this.httpRequest.post<UsersModel>(this.ServerRegistroUsuario,user);

  }

  PostAuth(user:AuthModel):Observable<AuthModel>{

    return this.httpRequest.post<AuthModel>(this.ServerAutenticacion,user);
    
  }
}
