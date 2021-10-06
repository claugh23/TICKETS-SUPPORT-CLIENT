import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { UsersModel } from 'src/app/Interfaces/IUsers';
import { LoginService } from 'src/app/Services/Autentication/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  //Formularios
  FormRegistroUser: FormGroup;
  FormLogin: FormGroup;

  //Componentes del formulario de registro
  private FormName = new FormControl();
  private FormLastName = new FormControl();
  private FormPhone = new FormControl();
  private FormEmail = new FormControl();
  private FormPass = new FormControl();

  //Componentes del formulario de Login
  private FormUserEmail = new FormControl();
  private FormUserPass = new FormControl();

  //variables dinamicas
  private rolUser: string = 'User';
  statusRegistro: any;
  statusLoginIncorrecto: any;
  statusLoginCorrecto: any;
  statusLoginGUI: boolean = true;
  CurrentLocalStorageState: string;
  codeErrorGUI: string;
  RolActual: string;
  ErrorMessageLogin: string;

  constructor(
    private BuilderRegistroForm: FormBuilder,
    private BuilderLoginForm: FormBuilder,
    private WebServiceUser: LoginService,
    private enrutamiento: Router
  ) {
    this.FormRegistroUser = this.BuilderRegistroForm.group({
      FormName: ['', Validators.required],
      FormLastName: ['', Validators.required],
      FormPhone: ['', Validators.required],
      FormEmail: ['', Validators.required],
      FormPass: ['', Validators.required],
    });

    this.FormLogin = this.BuilderLoginForm.group({
      FormUserEmail: ['', Validators.required],
      FormUserPass: ['', Validators.required],
    });
  }

  async ServiceRegistroUsuario() {
    const registro: UsersModel = {
      _id:"",
      name: this.FormRegistroUser.get('FormName').value,
      lastName: this.FormRegistroUser.get('FormLastName').value,
      phone: this.FormRegistroUser.get('FormPhone').value,
      email: this.FormRegistroUser.get('FormEmail').value,
      pass: this.FormRegistroUser.get('FormPass').value,
      role: this.rolUser,
    };

    this.WebServiceUser.PostUserRegister(registro).subscribe(
      (result) => { },
      (RegistroCompleto: any) => {
        this.statusRegistro = true;
      }
    );
  }

  async ServiceAutentication() {
    this.statusLoginIncorrecto = false;

    const credentials: UsersModel = {
      email: this.FormLogin.get('FormUserEmail').value,
      pass: this.FormLogin.get('FormUserPass').value,
      lastName: '',
      name: '',
      phone: '',
      role: 'Admin',
      _id: '',
    };

    this.WebServiceUser.PostUserAutentication(credentials).subscribe(
      (result: any) => {

        localStorage.clear();
        this.RolActual = result[3];

        if (this.RolActual === 'User') {
          localStorage.setItem("Name", result[0]);
          localStorage.setItem("LastName", result[1]);
          localStorage.setItem("Email", result[2]);
          localStorage.setItem("Role", result[3]);
          localStorage.setItem("Phone", result[4]);
          this.enrutamiento.navigate(['/GenerateTicketsRequest']);
        } else if (this.RolActual === 'Admin') {
          localStorage.setItem("Name", result[0]);
          localStorage.setItem("LastName", result[1]);
          localStorage.setItem("Email", result[2]);
          localStorage.setItem("Role", result[3]);
          localStorage.setItem("Phone", result[4]);
          this.enrutamiento.navigate(['/TicketDashBoard']);
        }
      },
      (error: HttpErrorResponse) => {
        this.statusLoginIncorrecto = true;

        this.ErrorMessageLogin = JSON.stringify(
          'Ocurrio un error al validar la informacion con el servidor: ' +
          JSON.stringify(error.error)
        );
      }
    );
  }

  ngOnInit(): void { }
}
