import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { LogsTicketsModel } from "src/app/Interfaces/IlogsTickets";
@Injectable({
  providedIn: 'root'
})
export class LogsTicketsService {

  //serverLogsTicket = 'https://localhost:5001/api/LogTickets/'
  serverLogsTickets = 'http://192.168.3.5:5001/api/LogTickets/'

  constructor(private httpRequest:HttpClient) { }

  PostLogUser(TicketCompleted:LogsTicketsModel):Observable<LogsTicketsModel>{

    return this.httpRequest.post<LogsTicketsModel>(this.serverLogsTickets,TicketCompleted);

  }

  GetTicketsCompleted(){

    return this.httpRequest.get<LogsTicketsModel>(this.serverLogsTickets);

  }

  GetFilteredLogs(name:string){

    return this.httpRequest.get<LogsTicketsModel>(this.serverLogsTickets+name);
  }
  
}
