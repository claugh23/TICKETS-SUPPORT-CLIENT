import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { LogsTicketsModel } from 'src/app/Interfaces/IlogsTickets';
import {TicketRequesModel} from 'src/app/Interfaces/ITickets'
import { LogsTicketsService } from 'src/app/Services/LogsTickets/logs-tickets.service';
import { TicketsService } from 'src/app/Services/Tickets/tickets.service';
@Component({
  selector: 'app-ticket-dash-test',
  templateUrl: './ticket-dash-test.component.html',
  styleUrls: ['./ticket-dash-test.component.css']
})
export class TicketDashTestComponent implements OnInit {

  FormSolution: FormGroup;
  FormDetailsSolutions = new FormControl('');

  //variables dinamicas
  ListaCurrentTickets: TicketRequesModel[];
  TicketSeleccionado: TicketRequesModel;

  //variables de formulario
  Getclient: string;
  Getticket: number;
  Getdetails: string;
  GetId:string;

  //States para html
  SetAlert:boolean;

  constructor(private TicketsServiceAPI: TicketsService, private LogsTicketsAPI: LogsTicketsService, private FormSolutionBuilder: FormBuilder) {

    this.FormSolution = this.FormSolutionBuilder.group({
      FormDetailsSolutions: ['',Validators.required]
    })

  }

  GetTicketsAll() {

    this.TicketsServiceAPI.GetCurrentTickets().subscribe((result: any) => {

      this.ListaCurrentTickets = result;
    }, (error: HttpErrorResponse) => {

      alert(JSON.stringify(error.error))

    })
  }

  SetTicketToForm(name: string, ticketNumber: number, detailsPhrase: string,idTicket:string) {

    this.Getclient = name;
    this.Getticket = ticketNumber;
    this.Getdetails = detailsPhrase;
    this.GetId = idTicket;

  }

  GetSelectedTicket(ticket: any) {

    const comprobacion = confirm("ESTAS SEGURO DE COMPLETAR EL TICKET: "+this.Getticket);

    if (comprobacion) {

      const Ticket: LogsTicketsModel = {
        _id: this.GetId,
        ticketNumber: this.Getticket,
        name: this.Getclient,
        typeRequest: ticket.typeRequest,
        details: this.Getdetails,
        solutionDetails: this.FormSolution.get('FormDetailsSolutions').value

      }

     
      //aca inicia el servicio para mandar al log:
      this.LogsTicketsAPI.PostLogUser(Ticket).subscribe((result: any) => {

        alert("SE COMPLETO EL TICKET: " + Ticket.ticketNumber);

        this.GetTicketsAll();

      }, (error: HttpErrorResponse) => {
        
        this.SetAlert = true;
      
      })



    } else {
      alert("OCURRIO UN DESCONOCIDO EN LA APLICACION O LA INFORMACION NO PUEDE SER PROCESADA")
    }

  }

  displayedColumns: string[] = ['ticketNumber','RequestType', 'name','lastName', 'phone', 'details', 'dispatchDelete'];


  ngOnInit() {
    this.GetTicketsAll();
    // const RealTicketsLoader = interval(60000);

    // RealTicketsLoader.subscribe((countRequest) => {


    //   this.GetTicketsAll();

    // })



  }

}
