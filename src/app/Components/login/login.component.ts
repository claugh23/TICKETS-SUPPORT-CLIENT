import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthModel } from 'src/app/Interfaces/IAuth';
import { UsersModel } from 'src/app/Interfaces/IUsers';
import { LoginService } from 'src/app/Services/Autentication/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
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
  private rolUser: string = "User";
  statusRegistro: any;
  statusLoginIncorrecto: any;
  statusLoginCorrecto: any;
  codeErrorGUI: string;

  constructor(private BuilderRegistroForm: FormBuilder, private BuilderLoginForm: FormBuilder, private WebServiceUser: LoginService,private enrutamiento:Router) {

    this.FormRegistroUser = this.BuilderRegistroForm.group({
      FormName: ['', Validators.required],
      FormLastName: ['', Validators.required],
      FormPhone: ['', Validators.required],
      FormEmail: ['', Validators.required],
      FormPass: ['', Validators.required]
    });

    this.FormLogin = this.BuilderLoginForm.group({
      FormUserEmail: ['', Validators.required],
      FormUserPass: ['', Validators.required]
    })

  }

  async ServiceRegistroUsuario() {

    const registro: UsersModel = {
      Name: this.FormRegistroUser.get('FormName').value,
      LastName: this.FormRegistroUser.get('FormLastName').value,
      Phone: this.FormRegistroUser.get('FormPhone').value,
      Email: this.FormRegistroUser.get('FormEmail').value,
      Pass: this.FormRegistroUser.get('FormPass').value,
      Role: this.rolUser
    }

    this.WebServiceUser.PostUserRegister(registro).subscribe(result => {


    }, (RegistroCompleto: any) => {
      this.statusRegistro = true;

    })

  }

  async ServiceAutentication() {

    this.statusLoginIncorrecto = false;

    const credentials: UsersModel = {

      Email: this.FormLogin.get('FormUserEmail').value,
      Pass: this.FormLogin.get('FormUserPass').value,
      LastName:"",
      Name:"",
      Phone:"",
      Role:"Admin",
      id:""
      
    }

    this.WebServiceUser.PostUserAutentication(credentials).subscribe(
      (result:any) => {
        alert("Solicitud: "+ JSON.stringify(result))
      },
      (error:HttpErrorResponse) =>{
        
        alert(JSON.stringify(error.error));

        this.statusLoginIncorrecto = true;

        this.enrutamiento.navigate(['/TicketsSupportModule']);

      }
    )

   

  }

  ngOnInit(): void {
  }

}
