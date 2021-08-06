import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {TicketRequesModel} from 'src/app/Interfaces/ITickets'
import { TicketsService } from 'src/app/Services/Tickets/tickets.service';
@Component({
  selector: 'app-ticket-dash-test',
  templateUrl: './ticket-dash-test.component.html',
  styleUrls: ['./ticket-dash-test.component.css']
})
export class TicketDashTestComponent implements OnInit {

  constructor(private TicketsServiceAPI: TicketsService) { }

  ListaCurrentTickets:TicketRequesModel[]



  GetTicketsAll() {

    this.TicketsServiceAPI.GetCurrentTickets().subscribe((result: any) => {

      this.ListaCurrentTickets = result;
    }, (error: HttpErrorResponse) => {

      alert(JSON.stringify(error.error))

    })
  }
  
  ngOnInit() {
    this.GetTicketsAll();
  }

}
