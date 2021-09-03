import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-licenses-dates',
  templateUrl: './licenses-dates.component.html',
  styleUrls: ['./licenses-dates.component.css']
})
export class LicensesDatesComponent implements OnInit {

  listaLicencias: any = [1, 2, 3, 4, 5, 6,7,8,9,10,11,12,13,14,15,16,1];

  constructor() {


  }

  ngOnInit() {
  }

}
