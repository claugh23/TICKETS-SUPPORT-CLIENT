import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ContactModel } from 'src/app/Interfaces/IContact';
import { ContactsService } from 'src/app/Services/Contacts/contacts.service';
@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css'],
})
export class ContactListComponent implements OnInit {

  //Variables dinamicas
  ListaContactos:ContactModel;

  //Formulario de contactos
  FormContacts: FormGroup;
  FormContactName = new FormControl('');
  FormContactLastName = new FormControl('');
  FormContactEmail = new FormControl('');
  FormContactPhone = new FormControl('');
  FormContactDescripcion = new FormControl('');

  constructor(
    private FormContactBuilder: FormBuilder,
    private contactAPI: ContactsService
  ) {
    this.FormContacts = this.FormContactBuilder.group({
      FormContactName: ['', Validators.required],
      FormContactLastName: ['', Validators.required],
      FormContactEmail: ['', Validators.required],
      FormContactPhone: ['', Validators.required],
      FormContactDescripcion: ['', Validators.required],
    });
  }

  CreateContact() {
    const contactInfo: ContactModel = {
      name: this.FormContacts.get('FormContactName').value,
      lastName: this.FormContacts.get('FormContactLastName').value,
      email: this.FormContacts.get('FormContactEmail').value,
      phone: this.FormContacts.get('FormContactPhone').value,
      description: this.FormContacts.get('FormContactDescripcion').value,
    };
    this.contactAPI.PostContact(contactInfo).subscribe(
      (result) => {
        alert('El contacto ha sido agregado!!');
      },
      (error: HttpErrorResponse) => {
        alert(JSON.stringify(error.error));
      }
    );
  }

  ObtenerContactos(){

    this.contactAPI.GetContacts().subscribe((result:any) => {

      console.log(result)

      this.ListaContactos = result;

    },(error:HttpErrorResponse) => {

      this.ObtenerContactos();
    })

  }

  ngOnInit() {

    this.ObtenerContactos();
  }
}
