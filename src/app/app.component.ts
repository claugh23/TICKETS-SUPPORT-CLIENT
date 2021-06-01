import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { interval, Subscription } from 'rxjs';
import { first } from "rxjs/operators";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ClienteMBS';

  private source = interval(1000);

  constructor(private router: Router, private requestServer: HttpClient) {

   


  }
  ngOnInit() {
    this.router.navigateByUrl('/');


  }
}
