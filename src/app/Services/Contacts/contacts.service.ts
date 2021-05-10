import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ContactModel } from "src/app/Interfaces/IContact";
@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  serverContacts = 'https://localhost:5001/api/Contacts/'

  constructor(private httpRequest:HttpClient) { }

  GetContacts(){
    return this.httpRequest.get<ContactModel>(this.serverContacts);
  }

  PostContact(contactInfo:ContactModel):Observable<ContactModel>{

    return this.httpRequest.post<ContactModel>(this.serverContacts,contactInfo);
  }

}
