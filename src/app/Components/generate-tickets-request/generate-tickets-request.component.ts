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

  //Form para seleccionar Categoria
  FormCategoryDatabase: FormGroup;


  //Variables Dinamicas
  CurrentName: string;
  CurrentLastName: string;
  CurrentEmail: string;
  CurrentRole: string;
  CurrentPhone: string;
  CurrentCategory: string;

  //Lista de tickets
  CurrentTicketsList: TicketRequesModel;
  ListInventory: InventoryItemModel;

  //States
  IsTicketGenerate: boolean;
  GeneratingTicket: boolean;

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

    this.GeneratingTicket = true;

    const Ticket: TicketRequesModel = {
      name: localStorage.getItem("Name"),
      lastName: localStorage.getItem("LastName"),
      email: localStorage.getItem("Email"),
      phone: Number.parseInt(localStorage.getItem("Phone")),
      typeRequest: this.FormTicket.get('FormTicketCategory').value,
      details: this.FormTicket.get('FormTicketDetails').value,
      ticketNumber: Math.floor(Math.random() * 15000)
    }

    this.TicketAPI.PostTicket(Ticket).subscribe((result: any) => {

      alert("SE HA GENERADO EL TICKET NUMERO: " + Ticket.ticketNumber);

    }, (error: HttpErrorResponse) => {

      this.IsTicketGenerate = true;
      this.GeneratingTicket = false;
    })

  }

  SearchTicketsFromCurrentUser() {

    this.TicketAPI.GetUserTickets(localStorage.getItem("Email")).subscribe((result: any) => {

      this.CurrentTicketsList = result;

    }, (error: HttpErrorResponse) => {
      alert(JSON.stringify(error.error));
    })
  }

  async GetInventoryComputers() {
    const categoryComputer = "COMPUTERS";
    (await this.InventoryAPI.GetCurrentInventory(categoryComputer)).subscribe((result: any) => {

      this.ListInventory = result;
    })
  }
  async GetInventoryNetworks() {
    const categoryComputer = "NETWORK DEVICES";
    (await this.InventoryAPI.GetCurrentInventory(categoryComputer)).subscribe((result: any) => {

      this.ListInventory = result;
    })
  }
  async GetInventoryCameras() {
    const categoryComputer = "SECURITY CAMERAS";
    (await this.InventoryAPI.GetCurrentInventory(categoryComputer)).subscribe((result: any) => {

      this.ListInventory = result;
    })
  }
  async GetInventorySound() {
    const categoryComputer = "SOUND EQUIPMENT";
    (await this.InventoryAPI.GetCurrentInventory(categoryComputer)).subscribe((result: any) => {

      this.ListInventory = result;
    })
  }
  async GetInventoryMultimedia() {
    const categoryComputer = "PROYECTION AND MULTIMEDIA DEVICES";
    (await this.InventoryAPI.GetCurrentInventory(categoryComputer)).subscribe((result: any) => {

      this.ListInventory = result;
    })
  }
  async GetInventoryTablets() {
    const categoryComputer = "TABLETS OR IPADS";
    (await this.InventoryAPI.GetCurrentInventory(categoryComputer)).subscribe((result: any) => {

      this.ListInventory = result;
    })
  }
  async GetInventorySoftware() {
    const categoryComputer = "SOFTWARE UTILITIES";
    (await this.InventoryAPI.GetCurrentInventory(categoryComputer)).subscribe((result: any) => {

      this.ListInventory = result;
    })
  }

  CheckCurrentDatabase() {

    this.CurrentCategory = this.FormCategoryDatabase.get('FormCategorySelected').value

  }

  LoadDatabaseInfo() {

    if (this.CurrentCategory === "COMPUTERS") {

      this.GetInventoryComputers();

    } else if (this.CurrentCategory === "PROYECTION AND MULTIMEDIA DEVICES") {

      this.GetInventoryMultimedia();
    }
    else if (this.CurrentCategory === "TABLETS OR IPADS") {

      this.GetInventoryTablets();
    }
    else if (this.CurrentCategory === "SOUND EQUIPMENT") {

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

    this.IsTicketGenerate = false;
  }

}
