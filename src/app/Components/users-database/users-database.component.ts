import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UsersModel } from 'src/app/Interfaces/IUsers';
import { LoginService } from 'src/app/Services/Autentication/login.service';

@Component({
  selector: 'app-users-database',
  templateUrl: './users-database.component.html',
  styleUrls: ['./users-database.component.css']
})
export class UsersDatabaseComponent implements OnInit {

  //variables dinamicas
  statusRegistroUser:any;

  //listados
  ListaUsers: UsersModel[];

  //Formulario Agregar User
  FormAddUser: FormGroup;
  Formname = new FormControl('');
  Formlastname = new FormControl('');
  Formphone = new FormControl('');
  Formemail = new FormControl('');
  Formpass = new FormControl('');
  Formrole = new FormControl('');

  constructor(private FormAddUserBuilder: FormBuilder, private UserServiceAPI: LoginService) {

    this.FormAddUser = this.FormAddUserBuilder.group({
      Formname: ['', Validators.required],
      Formlastname: ['', Validators.required],
      Formphone: ['', Validators.required],
      Formemail: ['', Validators.required],
      Formpass: ['', Validators.required],
      Formrole: ['', Validators.required]
    })

  }

  ObtenerUsers() {

    this.UserServiceAPI.GetUsers().subscribe((result: any) => {

      this.ListaUsers = result
    }, (error: HttpErrorResponse) => {

      alert("Ocurrio un problema al cargar los usuarios: " + JSON.stringify(error.error))
    })

  }

  RegisterNewUser(){

    const registro: UsersModel = {
      Name: this.FormAddUser.get('Formname').value,
      LastName: this.FormAddUser.get('Formlastname').value,
      Phone: this.FormAddUser.get('Formphone').value,
      Email: this.FormAddUser.get('Formemail').value,
      Pass: this.FormAddUser.get('Formpass').value,
      Role: this.FormAddUser.get('Formrole').value
    };

    this.UserServiceAPI.PostUserRegister(registro).subscribe(
      (result) => { 

      },
      (RegistroCompleto: any) => {
        this.statusRegistroUser = true;
        this.ObtenerUsers();
      }
    );
  }

  ngOnInit() {

    this.ObtenerUsers();
  }

}
