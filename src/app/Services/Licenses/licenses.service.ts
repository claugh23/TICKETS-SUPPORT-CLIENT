import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LicensesModel } from "src/app/Interfaces/ILicenses";

@Injectable({
  providedIn: 'root'
})
export class LicensesService {

  ServerUrlTest = 'https://192.168.3.5:5002/api/Licenses/';

  constructor(private httpRequest: HttpClient) { }

  async GetLicenses() {
    return this.httpRequest.get<LicensesModel[]>(this.ServerUrlTest)
  }

  async PostLicense(newLicense: LicensesModel): Promise<Observable<LicensesModel>> {
    return this.httpRequest.post<LicensesModel>(this.ServerUrlTest, newLicense)
  }

  async DeleteLicenses(CurrentLicenseId: string) {
    return this.httpRequest.delete<string>(this.ServerUrlTest + CurrentLicenseId);
  }

  async PutLicenses(putLicense: LicensesModel) {
    return this.httpRequest.put<LicensesModel>(this.ServerUrlTest, putLicense);
  }
}
