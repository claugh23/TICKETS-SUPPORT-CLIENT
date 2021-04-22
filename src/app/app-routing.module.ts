import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
<<<<<<< HEAD
import {UsersAutenticationGuard  } from "src/app/Guards/Users/users-autentication.guard";
=======
>>>>>>> a6219970dab3fc6ab5a713d0084503d244244c6d
import { GenerateTicketsRequestComponent } from './Components/generate-tickets-request/generate-tickets-request.component';

const routes: Routes = [

<<<<<<< HEAD
  {path:'TicketsSupportModule',component:GenerateTicketsRequestComponent,canActivate:[UsersAutenticationGuard]},
  { path: '**',   redirectTo: '/' }
=======
  {path:'TicketsGenerator',component:GenerateTicketsRequestComponent},
  { path:'**',redirectTo:'/'},
>>>>>>> a6219970dab3fc6ab5a713d0084503d244244c6d

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
