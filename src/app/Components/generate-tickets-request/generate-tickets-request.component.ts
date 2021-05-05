import { HttpErrorResponse } from '@angular/common/http';
import { ResourceLoader } from '@angular/compiler';
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
  FormTicketCategory = new FormControl('');
  FormTicketDetails = new FormControl('');

  //Variables Dinamicas
  CurrentName:string;
  CurrentLastName:string;
  CurrentEmail:string;
  CurrentRole:string;
  CurrentPhone:string;

  //Lista de tickets
  CurrentTicketsList:TicketRequesModel;

  constructor(private FormTicketBuilder: FormBuilder, private TicketAPI: TicketsService) {

    this.FormTicket = this.FormTicketBuilder.group({

    
      FormTicketCategory: ['', Validators.required],
      FormTicketDetails: ['', Validators.required]
    });

  }

  CreateTicket() {

    const Ticket: TicketRequesModel = {
      Name: localStorage.getItem("Name"),
      LastName: localStorage.getItem("LastName"),
      Email: localStorage.getItem("Email"),
      Phone: Number.parseInt(localStorage.getItem("Phone")),
      TypeRequest: this.FormTicket.get('FormTicketCategory').value,
      Details: this.FormTicket.get('FormTicketDetails').value,
      TicketNumber: Math.floor(Math.random() * 15000)
    }

    this.TicketAPI.PostTicket(Ticket).subscribe((result:any) => {

      alert("SE HA GENERADO EL TICKET NUMERO: "+ Ticket.TicketNumber);

    },(error:HttpErrorResponse) =>{

      alert("Ocurrio un problema al generar el ticket: "+JSON.stringify(error.error))
    })

  }

  SearchTicketsFromCurrentUser(){

  
    this.TicketAPI.GetUserTickets(localStorage.getItem("Name")).subscribe((result:any) => {

      this.CurrentTicketsList = result;
    
    },(error:HttpErrorResponse) => {
      alert(JSON.stringify(error.error));
    })
  }

  CleanCache(){
    localStorage.clear();
  }
  ngOnInit() {

    this.CurrentName= localStorage.getItem("Name");
    this.CurrentLastName = localStorage.getItem("LastName");
    this.CurrentEmail = localStorage.getItem("Email");
    this.CurrentRole = localStorage.getItem("Role");
    this.CurrentPhone = localStorage.getItem("Phone");
  }

}
