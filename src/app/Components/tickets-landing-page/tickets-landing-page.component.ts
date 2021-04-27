import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { TicketRequesModel } from 'src/app/Interfaces/ITickets';
import { TicketsService } from 'src/app/Services/Tickets/tickets.service';

@Component({
  selector: 'app-tickets-landing-page',
  templateUrl: './tickets-landing-page.component.html',
  styleUrls: ['./tickets-landing-page.component.css']
})
export class TicketsLandingPageComponent implements OnInit {


  //variables dinamicas
  ListaCurrentTickets:TicketRequesModel[];

  constructor(private TicketsServiceAPI:TicketsService) { }

  GetTicketsAll(){

    this.TicketsServiceAPI.GetCurrentTickets().subscribe((result:any) => {

      this.ListaCurrentTickets = result;



    },(error:HttpErrorResponse) =>{

      alert(JSON.stringify(error.error))

    })
  }





  ngOnInit() {

    this.GetTicketsAll();
  }

}
