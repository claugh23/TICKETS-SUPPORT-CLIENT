import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { LogsTicketsModel } from "src/app/Interfaces/IlogsTickets";
import { TicketsService } from '../Tickets/tickets.service';
@Injectable({
  providedIn: 'root'
})
export class LogsTicketsService {

  //serverLogsTicket = 'https://localhost:5001/api/LogTickets/'
  EndpointLogsTickets = 'https://spring-app-tickets.herokuapp.com/api/LogsTickets/';
  EndpointTickets: 'https://spring-app-tickets.herokuapp.com/api/Tickets/';

  constructor(private httpRequest: HttpClient) { }

  PostLogUser(TicketCompleted: LogsTicketsModel): Observable<LogsTicketsModel> {

    this.httpRequest.delete<any>(this.EndpointTickets+TicketCompleted.id);

    return this.httpRequest.post<LogsTicketsModel>(this.EndpointLogsTickets, TicketCompleted);

  }

  GetTicketsCompleted() {

    return this.httpRequest.get<LogsTicketsModel>(this.EndpointLogsTickets);

  }

  GetFilteredLogs(name: string) {

    return this.httpRequest.get<LogsTicketsModel>(this.EndpointLogsTickets + name);
  }

}
