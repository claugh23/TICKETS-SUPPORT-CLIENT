import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LicensesModel } from "src/app/Interfaces/ILicenses";

@Injectable({
  providedIn: 'root'
})
export class LicensesService {

  ServerUrl = 'https://localhost:5001/api/Licenses/';

  constructor(private httpRequest:HttpClient) { }

  async GetLicenses(){
    return this.httpRequest.get<LicensesModel[]>(this.ServerUrl)
  }
}
