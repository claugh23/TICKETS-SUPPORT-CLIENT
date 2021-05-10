import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { LogsTicketsModel } from 'src/app/Interfaces/IlogsTickets';
import { LogsTicketsService } from 'src/app/Services/LogsTickets/logs-tickets.service';

@Component({
  selector: 'app-completed-tickets',
  templateUrl: './completed-tickets.component.html',
  styleUrls: ['./completed-tickets.component.css']
})
export class CompletedTicketsComponent implements OnInit {

  //variables dinamicas
  listLogsTickets: LogsTicketsModel;

  constructor(private LogsTicketsAPI: LogsTicketsService) { }

  getTicketCompleted() {

    this.LogsTicketsAPI.GetTicketsCompleted().subscribe((result: any) => {

      this.listLogsTickets = result
    }, (error: HttpErrorResponse) => {

      alert("OCURRIO UN PROBLEMA AL CARGAR EL HISTORIAL DE TICKETS: " + "\n" + JSON.stringify(error.error))
    })


  }

  ngOnInit() {

    this.getTicketCompleted()
  }

}
