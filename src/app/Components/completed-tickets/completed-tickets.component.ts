import { HttpErrorResponse } from '@angular/common/http';
import { AfterViewInit, ViewChild } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { LogsTicketsModel } from 'src/app/Interfaces/IlogsTickets';
import { LogsTicketsService } from 'src/app/Services/LogsTickets/logs-tickets.service';

@Component({
  selector: 'app-completed-tickets',
  templateUrl: './completed-tickets.component.html',
  styleUrls: ['./completed-tickets.component.css']
})
export class CompletedTicketsComponent implements OnInit, AfterViewInit {

  //variables dinamicas
  listLogsTickets: LogsTicketsModel[];
  datasource: MatTableDataSource<LogsTicketsModel>;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private LogsTicketsAPI: LogsTicketsService) {


  }

  getTicketCompleted() {

    this.LogsTicketsAPI.GetTicketsCompleted().subscribe((result: any) => {

      this.listLogsTickets = result;
    }, (error: HttpErrorResponse) => {

      alert("OCURRIO UN PROBLEMA AL CARGAR EL HISTORIAL DE TICKETS: " + "\n" + JSON.stringify(error.error))
    })


  }
  displayedColumns: string[] = ['ClientName', 'TicketNumber', 'typeRequest', 'Details', 'SolutionDetails'];



  ngOnInit() {
    this.datasource = new MatTableDataSource(this.listLogsTickets);
    this.getTicketCompleted()
  }

  ngAfterViewInit() {
    this.datasource.paginator = this.paginator;

  }


}
