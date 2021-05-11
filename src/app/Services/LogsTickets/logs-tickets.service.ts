import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LogsTicketsModel } from "src/app/Interfaces/IlogsTickets";
@Injectable({
  providedIn: 'root'
})
export class LogsTicketsService {

  serverLogsTicket = 'https://192.168.3.5/ServerMBS/api/LogTickets/'


  constructor(private httpRequest:HttpClient) { }

  PostLogUser(TicketCompleted:LogsTicketsModel):Observable<LogsTicketsModel>{

    return this.httpRequest.post<LogsTicketsModel>(this.serverLogsTicket,TicketCompleted);

  }

  GetTicketsCompleted(){

    return this.httpRequest.get<LogsTicketsModel>(this.serverLogsTicket);

  }
  
}
