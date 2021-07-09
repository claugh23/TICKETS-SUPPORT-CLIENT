import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { interval, Observable } from 'rxjs';
import { TicketRequesModel } from 'src/app/Interfaces/ITickets';
import { TicketsService } from 'src/app/Services/Tickets/tickets.service';
import { LogsTicketsService } from 'src/app/Services/LogsTickets/logs-tickets.service';
import { LogsTicketsModel } from 'src/app/Interfaces/IlogsTickets';
@Component({
  selector: 'app-tickets-landing-page',
  templateUrl: './tickets-landing-page.component.html',
  styleUrls: ['./tickets-landing-page.component.css']
})
export class TicketsLandingPageComponent implements OnInit {


  //variables dinamicas
  ListaCurrentTickets: TicketRequesModel[];
  TicketSeleccionado: TicketRequesModel;
  
  constructor(private TicketsServiceAPI: TicketsService, private LogsTicketsAPI: LogsTicketsService) { }

  GetTicketsAll() {

    this.TicketsServiceAPI.GetCurrentTickets().subscribe((result: any) => {

      this.ListaCurrentTickets = result;
    }, (error: HttpErrorResponse) => {

      alert(JSON.stringify(error.error))

    })
  }

  GetSelectedTicket(ticket: any) {

    const comprobacion = confirm("YA COMPLETASTE EL TICKET: " + ticket.ticketNumber + " A NOMBRE DE: " + ticket.name);

    const detalles = prompt("DIGITE LOS DETALLES DE LA SOLUCION PARA EL TICKET: " + ticket.ticketNumber);

    if (comprobacion) {

      if (detalles === '') {
        alert("DEBE DIGITAR LOS DETALLES DE SOLUCION PARA EL TICKET: " + ticket.ticketNumber);
      } else {
        const Ticket: LogsTicketsModel = {
          _id: ticket._id,
          ticketNumber: Number.parseInt(ticket.ticketNumber),
          name: ticket.name,
          typeRequest: ticket.typeRequest,
          details: ticket.details,
          solutionDetails: detalles

        }

        if (detalles === '') {
          alert("NO SE DIGITO LA SOLUCION PARA EL TICKET, ES REQUERIDA!");

        }

        this.LogsTicketsAPI.PostLogUser(Ticket).subscribe((result: any) => {

          alert("SE COMPLETO EL TICKET: " + Ticket.ticketNumber);

          this.GetTicketsAll();

        }, (error: HttpErrorResponse) => {

          alert("OCURRIO ALGO EN EL SERVIDOR: " + JSON.stringify(error.error));
          this.GetTicketsAll();
        })
      }


    } else {
      alert("OCURRIO UN DESCONOCIDO EN LA APLICACION O LA INFORMACION NO PUEDE SER PROCESADA")
    }

  }




  displayedColumns: string[] = ['ticketNumber','name','lastName','email','phone','details','dispatchDelete'];

  ngOnInit() {
    this.GetTicketsAll();
    const RealTicketsLoader = interval(10000);

    RealTicketsLoader.subscribe((countRequest) => {

      
      this.GetTicketsAll();
      
    })


   
  }

}
