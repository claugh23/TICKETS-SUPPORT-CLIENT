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
  statusRegistroUser: any;
  RoleSelected: any;
  //listados
  ListaUsers: UsersModel[];
  ListaUsersRegistrations: UsersModel[];
  UserInfo: UsersModel;

  //Formulario Agregar User
  FormAddUser: FormGroup;
  Formname = new FormControl('');
  Formlastname = new FormControl('');
  Formphone = new FormControl('');
  Formemail = new FormControl('');
  Formpass = new FormControl('');
  Formrole = new FormControl('');

  //Formulario Actualizar User
  FormUpdateUser: FormGroup;
  FormUpdateName = new FormControl('');
  FormUpdateLastName = new FormControl('');
  FormUpdatePhone = new FormControl('');
  FormUpdateEmail = new FormControl('');
  FormUpdatePass = new FormControl('');
  FormUpdateRole = new FormControl('');

  constructor(private FormAddUserBuilder: FormBuilder, private FormUpdateUserBuilder: FormBuilder, private UserServiceAPI: LoginService) {

    this.FormAddUser = this.FormAddUserBuilder.group({
      Formname: ['', Validators.required],
      Formlastname: ['', Validators.required],
      Formphone: ['', Validators.required],
      Formemail: ['', Validators.required],
      Formpass: ['', Validators.required],
      Formrole: ['', Validators.required]
    })
    this.FormUpdateUser = this.FormUpdateUserBuilder.group({
      FormUpdateName: ['', Validators.required],
      FormUpdateLastName: ['', Validators.required],
      FormUpdatePhone: ['', Validators.required],
      FormUpdateEmail: ['', Validators.required],
      FormUpdatePass: ['', Validators.required],
      FormUpdateRole: ['', Validators.required]
    })
  }

  ObtenerUsers() {

    this.UserServiceAPI.GetUsers().subscribe((result: any) => {

      this.ListaUsers = result;
    }, (error: HttpErrorResponse) => {

      alert("Ocurrio un problema al cargar los usuarios: " + JSON.stringify(error.error));
    })
  }

  ObtenerInscripciones() {

    this.UserServiceAPI.GetSuscriptions().subscribe((result: any) => {

      this.ListaUsersRegistrations = result;
    }, (error: HttpErrorResponse) => {

      alert("Ocurrio un problema al cargar los usuarios: " + JSON.stringify(error.error));
    })
  }

  ApproveSuscription(CurrentUser: any) {
    this.GetSelectedUser(CurrentUser);

    const registro: UsersModel = {
      Name: this.UserInfo.Name,
      LastName: this.UserInfo.LastName,
      Phone: this.UserInfo.Phone,
      Email: this.UserInfo.Email,
      Pass: this.UserInfo.Pass,
      Role: "Approve"
    };


    this.UserServiceAPI.PostUserRegister(registro).subscribe(
      (result) => {

      },
      (RegistroCompleto: any) => {
        alert("EL USUARIO: " + this.UserInfo.Name + " HA SIDO APROBADO!")
        this.ObtenerInscripciones();
      }
    );
  }

  RejectSuscription(CurrentUser: any) {
    this.GetSelectedUser(CurrentUser);

    this.UserServiceAPI.DeleteSuscription(CurrentUser._id).subscribe(
      (result) => {

      },
      (RegistroCompleto: any) => {
        alert("EL USUARIO: " + this.UserInfo.Name + "HA SIDO RECHAZADO Y ELIMINADO!");
        this.ObtenerInscripciones();
      }
    );
  }

  RegisterNewUser() {

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

  GetSelectedUser(CurrentUser: any) {
    this.UserInfo = {
      _id: CurrentUser._id,
      Name: CurrentUser.name,
      LastName: CurrentUser.lastName,
      Phone: CurrentUser.phone,
      Email: CurrentUser.email,
      Pass: CurrentUser.pass,
      Role: CurrentUser.role
    }

    CurrentUser = this.UserInfo
  }

  UpdateUser() {

    const UserInfoUpdate: UsersModel = {
      _id: this.UserInfo._id,
      Name: this.FormUpdateUser.get('FormUpdateName').value,
      LastName: this.FormUpdateUser.get('FormUpdateLastName').value,
      Phone: this.FormUpdateUser.get('FormUpdatePhone').value,
      Email: this.FormUpdateUser.get('FormUpdateEmail').value,
      Pass: this.FormUpdateUser.get('FormUpdatePass').value,
      Role: this.FormUpdateUser.get('FormUpdateRole').value
    }


    alert(JSON.stringify(this.UserInfo._id))

    this.UserServiceAPI.UpdateSelectedUser(UserInfoUpdate).subscribe((result: any) => {
      alert("El usuario: " + UserInfoUpdate.Name + " fue actualizado!!");

    }, (error: HttpErrorResponse) => {
      alert("Algo paso: " + JSON.stringify(error.error));


    })
  }

  DeleteUser(CurrentId: any) {

    this.UserServiceAPI.DeleteSelectedUser(CurrentId._id).subscribe((result: any) => {
      alert("Usuario Borrado!");
    }, (error: HttpErrorResponse) => {
      alert(JSON.stringify(error.error));
      this.ObtenerUsers();
    })
  }
  RefreshUsers() {
    this.ObtenerUsers();
  }
  ngOnInit() {

    this.ObtenerUsers();
    this.ObtenerInscripciones();
  }
}

