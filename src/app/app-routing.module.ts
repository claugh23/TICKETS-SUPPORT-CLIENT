import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UsersAutenticationGuard  } from "src/app/Guards/Users/users-autentication.guard";
import { GenerateTicketsRequestComponent } from './Components/generate-tickets-request/generate-tickets-request.component';

const routes: Routes = [

  {path:'TicketsSupportModule',component:GenerateTicketsRequestComponent,canActivate:[UsersAutenticationGuard]},
  { path: '**',   redirectTo: '/' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
