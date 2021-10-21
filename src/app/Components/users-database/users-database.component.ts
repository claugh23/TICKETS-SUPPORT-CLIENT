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
  //Formulario Actualizar User
  FormUpdateUser: FormGroup;


  constructor(private FormAddUserBuilder: FormBuilder, private FormUpdateUserBuilder: FormBuilder, private UserServiceAPI: LoginService) {

    this.FormAddUser = this.FormAddUserBuilder.group({
      Formname: new FormControl(''),
      Formlastname: new FormControl(''),
      Formphone: new FormControl(''),
      Formemail: new FormControl(''),
      Formpass: new FormControl(''),
      Formrole: new FormControl(''),
    })
    this.FormUpdateUser = this.FormUpdateUserBuilder.group({
      FormUpdateName: new FormControl(''),
      FormUpdateLastName: new FormControl(''),
      FormUpdatePhone: new FormControl(''),
      FormUpdateEmail: new FormControl(''),
      FormUpdatePass: new FormControl(''),
      FormUpdateRole: new FormControl(''),
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
      name: this.UserInfo.name,
      lastName: this.UserInfo.lastName,
      phone: this.UserInfo.phone,
      email: this.UserInfo.email,
      pass: this.UserInfo.pass,
      role: "Approve"
    };
    this.UserServiceAPI.PostUserRegister(registro).subscribe(
      (result) => {

      },
      (RegistroCompleto: any) => {
        alert("EL USUARIO: " + this.UserInfo.name + " HA SIDO APROBADO!")
        this.ObtenerInscripciones();

        this.GetSelectedUser(CurrentUser);

        this.UserServiceAPI.DeleteSuscription(CurrentUser._id).subscribe(
          (result) => {

          },
          (RegistroCompleto: any) => {
            this.ObtenerUsers();
            this.ObtenerInscripciones();
          }
        );
      }
    );

  }

  RejectSuscription(CurrentUser: any) {
    this.GetSelectedUser(CurrentUser);

    this.UserServiceAPI.DeleteSuscription(CurrentUser._id).subscribe(
      (result) => {

      },
      (RegistroCompleto: any) => {
        alert("EL USUARIO: " + this.UserInfo.name + "HA SIDO RECHAZADO Y ELIMINADO!");
        this.ObtenerInscripciones();
      }
    );
  }

  RegisterNewUser() {

    const registro: UsersModel = {
      name: this.FormAddUser.get('Formname').value,
      lastName: this.FormAddUser.get('Formlastname').value,
      phone: this.FormAddUser.get('Formphone').value,
      email: this.FormAddUser.get('Formemail').value,
      pass: this.FormAddUser.get('Formpass').value,
      role: this.FormAddUser.get('Formrole').value
    };

    this.UserServiceAPI.PostUserRegister(registro).subscribe(
      (result) => {

      },
      (RegistroCompleto: any) => {
        this.statusRegistroUser = true;
        this.ObtenerUsers();
        this.ObtenerInscripciones();
      }
    );
  }

  GetSelectedUser(CurrentUser: any) {
    this.UserInfo = {
      _id: CurrentUser.id,
      name: CurrentUser.name,
      lastName: CurrentUser.lastName,
      phone: CurrentUser.phone,
      email: CurrentUser.email,
      pass: CurrentUser.pass,
      role: CurrentUser.role
    }

    CurrentUser = this.UserInfo
    this.FormUpdateUser.patchValue(
      { FormUpdateName: this.UserInfo.name },
    )
    this.FormUpdateUser.patchValue(
      { FormUpdateLastName: this.UserInfo.lastName },
    )
    this.FormUpdateUser.patchValue(
      { FormUpdatePhone: this.UserInfo.phone },
    )
    this.FormUpdateUser.patchValue(
      { FormUpdateEmail: this.UserInfo.email },
    )
    this.FormUpdateUser.patchValue(
      { FormUpdatePass: this.UserInfo.pass },
    )
    this.FormUpdateUser.patchValue(
      { FormUpdateRole: this.UserInfo.role },
    )

    console.log(this.FormUpdateUser);

  }

  UpdateUser() {

    const UserInfoUpdate: UsersModel = {
      _id: this.UserInfo._id,
      name: this.FormUpdateUser.get('FormUpdateName').value,
      lastName: this.FormUpdateUser.get('FormUpdateLastName').value,
      phone: this.FormUpdateUser.get('FormUpdatePhone').value,
      email: this.FormUpdateUser.get('FormUpdateEmail').value,
      pass: this.FormUpdateUser.get('FormUpdatePass').value,
      role: this.FormUpdateUser.get('FormUpdateRole').value
    }

    alert(JSON.stringify(this.UserInfo._id))

    this.UserServiceAPI.UpdateSelectedUser(UserInfoUpdate).subscribe((result: any) => {
      alert("El usuario: " + UserInfoUpdate.name + " fue actualizado!!");

    }, (error: HttpErrorResponse) => {
      alert("Algo paso: " + JSON.stringify(error.error));

    })
  }

  DeleteUser(CurrentId: UsersModel) {

    this.UserServiceAPI.DeleteSelectedUser(CurrentId?._id).subscribe((result: any) => {
      alert("Usuario Borrado!");
    }, (error: HttpErrorResponse) => {
      alert(JSON.stringify(error.error));
      this.ObtenerUsers();
    })
  }
  RefreshUsers() {
    this.ObtenerUsers();
  }

  displayedColumns: string[] = ['name', 'lastname', 'phone', 'email', 'pass', 'role', 'approvals', 'rejects'];
  ngOnInit() {

    this.ObtenerUsers();
    this.ObtenerInscripciones();

    console.log(this.FormUpdateUser);

  }
}

