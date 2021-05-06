import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { EmailMessageModel } from 'src/app/Interfaces/IEmailMessage';
import { UsersModel } from 'src/app/Interfaces/IUsers';
import { LoginService } from 'src/app/Services/Autentication/login.service';
import { EmailsService } from "src/app/Services/Emails/emails.service";

@Component({
  selector: 'app-email-dashboard',
  templateUrl: './email-dashboard.component.html',
  styleUrls: ['./email-dashboard.component.css']
})
export class EmailDashboardComponent implements OnInit {

  //variables dinamicas
  ListaHistorialCorreo: EmailMessageModel[];
  ListaUsersEmails: UsersModel[];
  TodayDate = new Date();
  //Formulario de correo electronico
  FormEmail: FormGroup;
  FormSubject = new FormControl('');
  FormEmailTo = new FormControl('');
  FormMessage = new FormControl('');


  constructor(private FormEmailBuilder: FormBuilder, private EmailAPI: EmailsService,private UserServiceAPI:LoginService) {

    this.FormEmail = this.FormEmailBuilder.group({
      FormSubject: ['', Validators.required],
      FormEmailTo: ['', Validators.email],
      FormMessage: ['', Validators.required],

    })

  }
  ObtenerUsersEmails() {

    this.UserServiceAPI.GetUsers().subscribe((result: any) => {

      this.ListaUsersEmails = result;
    }, (error: HttpErrorResponse) => {

      alert("Ocurrio un problema al cargar los usuarios: " + JSON.stringify(error.error));
    })
  }
  GetAllEmailsSended() {

    this.EmailAPI.GetCurrentEmails().subscribe((result) => {
      this.ListaHistorialCorreo = result;
    }, (error: HttpErrorResponse) => {
      alert(JSON.stringify(error.error));
    })

  }
  SendEmail() {

    const MessageBody: EmailMessageModel = {

      subject: this.FormEmail.get('FormSubject').value,
      emailAddress: this.FormEmail.get('FormEmailTo').value,
      message: this.FormEmail.get('FormMessage').value,

    }
    this.EmailAPI.PostEmail(MessageBody).subscribe((result: any) => {

      alert("EL MENSAJE FUE ENVIADO CON EXITO")

    }, (error: HttpErrorResponse) => {

      alert(JSON.stringify(error.error))
      this.GetAllEmailsSended()
    })

  }


  ngOnInit() {
    this.GetAllEmailsSended();
    this.ObtenerUsersEmails();
  }

}
