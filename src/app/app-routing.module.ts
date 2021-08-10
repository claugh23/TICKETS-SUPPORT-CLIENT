import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//Proteccion de Rutas
import { AdminsGuard } from "src/app/Guards/Admins/admins.guard";
import { UsersAutenticationGuard } from "src/app/Guards/Users/users-autentication.guard";
import { CompletedTicketsComponent } from './Components/completed-tickets/completed-tickets.component';
import { ContactListComponent } from './Components/contact-list/contact-list.component';
import { EmailDashboardComponent } from './Components/email-dashboard/email-dashboard.component';
import { GenerateTicketsRequestComponent } from './Components/generate-tickets-request/generate-tickets-request.component';
import { InventoryComponent } from './Components/inventory/inventory.component';
import { LoginComponent } from './Components/login/login.component';
import { TicketsAppHomePageComponent } from './Components/tickets-app-home-page/tickets-app-home-page.component';
import { TicketsModuleComponent } from './Components/tickets-module/tickets-module.component';
import { UsersDatabaseComponent } from './Components/users-database/users-database.component';

const routes: Routes = [

  { path: 'Module-Tickets',component:TicketsModuleComponent,canActivate:[AdminsGuard]},
  { path: 'TicketDashBoard',component:TicketsAppHomePageComponent,canActivate:[AdminsGuard]},
  { path: 'CompletedTickets', component: CompletedTicketsComponent, canActivate: [AdminsGuard] },
  { path: 'Users', component: UsersDatabaseComponent, canActivate: [AdminsGuard] },
  { path: 'EmailDashboard', component: EmailDashboardComponent, canActivate: [AdminsGuard] },
  { path: 'ContactList', component: ContactListComponent, canActivate: [AdminsGuard] },
  { path: 'GenerateTicketsRequest', component: GenerateTicketsRequestComponent, canActivate: [UsersAutenticationGuard] },
  { path: 'Inventory', component: InventoryComponent, canActivate: [UsersAutenticationGuard] },
  { path: 'TicketsAppLogin', component: LoginComponent },
  { path: '**', redirectTo: '/TicketsAppLogin' },


];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
