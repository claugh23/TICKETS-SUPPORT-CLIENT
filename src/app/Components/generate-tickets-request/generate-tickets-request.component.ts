import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { TicketRequesModel } from "src/app/Interfaces/ITickets";
import { TicketsService } from "src/app/Services/Tickets/tickets.service";
@Component({
  selector: 'app-generate-tickets-request',
  templateUrl: './generate-tickets-request.component.html',
  styleUrls: ['./generate-tickets-request.component.css']
})
export class GenerateTicketsRequestComponent implements OnInit {

  //Formulario para generar el ticket
  FormTicket: FormGroup;
  FormTicketName = new FormControl('')
  FormTicketLastName = new FormControl('');
  FormTicketEmail = new FormControl('');
  FormTicketPhone = new FormControl('');
  FormTicketCategory = new FormControl('');
  FormTicketDetails = new FormControl('');

  //Variables Dinamicas
  CurrentUser
  CurrentEmail
  Current

  constructor(private FormTicketBuilder: FormBuilder, private TicketAPI: TicketsService) {

    this.FormTicket = this.FormTicketBuilder.group({

      FormTicketName: ['', Validators.required],
      FormTicketLastName: ['', Validators.required],
      FormTicketEmail: ['', Validators.required],
      FormTicketPhone: ['', Validators.required],
      FormTicketCategory: ['', Validators.required],
      FormTicketDetails: ['', Validators.required]
    });

  }

  CreateTicket() {

    const Ticket: TicketRequesModel = {
      Name: this.FormTicket.get('FormTicketName').value,
      LastName: this.FormTicket.get('FormTicketLastName').value,
      Email: this.FormTicket.get('FormTicketEmail').value,
      Phone: Number.parseInt(this.FormTicket.get('FormTicketPhone').value),
      TypeRequest: this.FormTicket.get('FormTicketCategory').value,
      Details: this.FormTicket.get('FormTicketDetails').value,
      TicketNumber: Math.floor(Math.random() * 15000)
    }

    this.TicketAPI.PostTicket(Ticket).subscribe((result:any) => {

      alert("SE HA GENERADO EL TICKET NUMERO: "+ Ticket.TicketNumber);

    },(error:HttpErrorResponse) =>{

      alert("Ocurrio un problema al generar el ticket! "+JSON.stringify(error.error))
    })

  }


  ngOnInit() {

    this.CurrentUser = localStorage.getItem("Name");
  }

}
