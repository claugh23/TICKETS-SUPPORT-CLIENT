import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TicketRequesModel } from "src/app/Interfaces/ITickets";

@Injectable({
  providedIn: 'root'
})
export class TicketsService {

  constructor(private httpRequest:HttpClient) { }

  //ServerTestLocal = "https://localhost:5001/api/Tickets/";
  ServerTicketsAPI = "https://spring-app-tickets.herokuapp.com/api/Tickets/";
  EndpointLogs =  "https://spring-app-tickets.herokuapp.com/api/Tickets/";
  ServerTicketsAPITickets = "https://spring-app-tickets.herokuapp.com/Tickets/GetClientTickets/";

  
  PostTicket(NewTicket:TicketRequesModel):Observable<TicketRequesModel>{

    return this.httpRequest.post<TicketRequesModel>(this.ServerTicketsAPI,NewTicket);
  }

  GetCurrentTickets(){
    return this.httpRequest.get<TicketRequesModel[]>(this.ServerTicketsAPI)
  }

  GetUserTickets(SearchTickets:string){

    return this.httpRequest.get<TicketRequesModel[]>(this.ServerTicketsAPI+SearchTickets);
  }

  CompleteTicketAndDelete(CurrentTicketId:string){
    return this.httpRequest.delete<string>(this.ServerTicketsAPI+CurrentTicketId);
  }

  DeleteTicket(CurrentTicketId:string){
    return this.httpRequest.delete<any>(this.ServerTicketsAPI+CurrentTicketId);
  }

}
