import { HttpErrorResponse } from '@angular/common/http';
import { ResourceLoader } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { TicketRequesModel } from "src/app/Interfaces/ITickets";
import { InventoryItemModel } from "src/app/Interfaces/IInventory";
import { TicketsService } from "src/app/Services/Tickets/tickets.service";
import { InventoryService } from "src/app/Services/Inventory/inventory.service";


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

  //Form para seleccionar Categoria
  FormCategoryDatabase: FormGroup;
  FormCategorySelected = new FormControl('');

  //Variables Dinamicas
  CurrentName: string;
  CurrentLastName: string;
  CurrentEmail: string;
  CurrentRole: string;
  CurrentPhone: string;
  CurrentCategory:string;

  //Lista de tickets
  CurrentTicketsList: TicketRequesModel;
  ListInventory: InventoryItemModel;

  constructor(private FormCategoriaBuilder: FormBuilder, private FormTicketBuilder: FormBuilder, private TicketAPI: TicketsService, private InventoryAPI: InventoryService) {

    this.FormTicket = this.FormTicketBuilder.group({

      FormTicketCategory: ['', Validators.required],
      FormTicketDetails: ['', Validators.required]
    });

    this.FormCategoryDatabase = this.FormCategoriaBuilder.group({
      FormCategorySelected: ['', Validators.required],
    })

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

    this.TicketAPI.PostTicket(Ticket).subscribe((result: any) => {

      alert("SE HA GENERADO EL TICKET NUMERO: " + Ticket.TicketNumber);

    }, (error: HttpErrorResponse) => {

      alert(JSON.stringify(error.error))
    })

  }

  SearchTicketsFromCurrentUser() {

    this.TicketAPI.GetUserTickets(localStorage.getItem("Name")).subscribe((result: any) => {

      this.CurrentTicketsList = result;

    }, (error: HttpErrorResponse) => {
      alert(JSON.stringify(error.error));
    })
  }

  GetInventoryComputers() {
    const categoryComputer = "COMPUTERS";
    this.InventoryAPI.GetCurrentInventory(categoryComputer).subscribe((result: any) => {

      this.ListInventory = result;
    })
  }
  GetInventoryNetworks() {
    const categoryComputer = "NETWORK DEVICES";
    this.InventoryAPI.GetCurrentInventory(categoryComputer).subscribe((result: any) => {

      this.ListInventory = result;
    })
  }
  GetInventoryCameras() {
    const categoryComputer = "SECURITY CAMERAS";
    this.InventoryAPI.GetCurrentInventory(categoryComputer).subscribe((result: any) => {

      this.ListInventory = result;
    })
  }
  GetInventorySound() {
    const categoryComputer = "SOUND EQUIPMENT";
    this.InventoryAPI.GetCurrentInventory(categoryComputer).subscribe((result: any) => {

      this.ListInventory = result;
    })
  }
  GetInventoryMultimedia() {
    const categoryComputer = "PROYECTION AND MULTIMEDIA DEVICES";
    this.InventoryAPI.GetCurrentInventory(categoryComputer).subscribe((result: any) => {

      this.ListInventory = result;
    })
  }
  GetInventoryTablets() {
    const categoryComputer = "TABLETS OR IPADS";
    this.InventoryAPI.GetCurrentInventory(categoryComputer).subscribe((result: any) => {

      this.ListInventory = result;
    })
  }
  GetInventorySoftware() {
    const categoryComputer = "SOFTWARE UTILITIES";
    this.InventoryAPI.GetCurrentInventory(categoryComputer).subscribe((result: any) => {

      this.ListInventory = result;
    })
  }

  CheckCurrentDatabase() {

    this.CurrentCategory = this.FormCategoryDatabase.get('FormCategorySelected').value

  }

  LoadDatabaseInfo(){

    if(this.CurrentCategory === "COMPUTERS"){

      this.GetInventoryComputers();

    }else if(this.CurrentCategory === "PROYECTION AND MULTIMEDIA DEVICES"){

      this.GetInventoryMultimedia();
    }
    else if(this.CurrentCategory === "TABLETS OR IPADS"){

      this.GetInventoryTablets();
    }
    else if(this.CurrentCategory === "SOUND EQUIPMENT"){

      this.GetInventorySound();
    }
   

  }

  CleanCache() {
    localStorage.clear();
  }
  ngOnInit() {

    this.CurrentName = localStorage.getItem("Name");
    this.CurrentLastName = localStorage.getItem("LastName");
    this.CurrentEmail = localStorage.getItem("Email");
    this.CurrentRole = localStorage.getItem("Role");
    this.CurrentPhone = localStorage.getItem("Phone");
   
  }

}
