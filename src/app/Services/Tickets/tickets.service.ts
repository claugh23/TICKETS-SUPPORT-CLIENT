import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TicketRequesModel } from "src/app/Interfaces/ITickets";

@Injectable({
  providedIn: 'root'
})
export class TicketsService {

  constructor(private httpRequest:HttpClient) { }

  ServerTicketsAPI = "https://webapiticketssupport20210607091925.azurewebsites.net/api/Tickets/";
  ServerTicketsAPITickets = "https://webapiticketssupport20210607091925.azurewebsites.net/Tickets/GetClientTickets/";
  
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
    return this.httpRequest.delete<string>(this.ServerTicketsAPI+CurrentTicketId);
  }

}
