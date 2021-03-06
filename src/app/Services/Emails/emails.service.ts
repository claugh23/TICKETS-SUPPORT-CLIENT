import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EmailMessageModel } from "src/app/Interfaces/IEmailMessage";
@Injectable({
  providedIn: 'root'
})
export class EmailsService {

  serverEmails = 'https://spring-app-tickets.herokuapp.com/api/Emails/';
  //ServerTest = 'https://localhost:5001/api/Emails';

  constructor(private httpRequest:HttpClient) { }

  PostEmail(Message:EmailMessageModel):Observable<EmailMessageModel>{

    return this.httpRequest.post<EmailMessageModel>(this.serverEmails,Message);

  }
  GetCurrentEmails(){

    return this.httpRequest.get<EmailMessageModel[]>(this.serverEmails);
  }
}
