import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UsersModel } from 'src/app/Interfaces/IUsers';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationServiceService {

  ServerRegistrationsSys = 'https://spring-app-tickets.herokuapp.com/api/AuthorizeUser/'

  constructor(private httpRequest: HttpClient) { }


  GetSuscriptions(): Observable<UsersModel> {

    return this.httpRequest.get<UsersModel>(this.ServerRegistrationsSys)
  }

  PostUserRegister(SetupUser: UsersModel): Observable<UsersModel> {


    return this.httpRequest.post<UsersModel>(this.ServerRegistrationsSys, SetupUser);
  }

  DeleteSuscription(id:String) {
    return this.httpRequest.delete<string>(this.ServerRegistrationsSys+id);
  }
}
