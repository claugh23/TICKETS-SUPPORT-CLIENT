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
import { TicketDashTestComponent } from './Components/ticket-dash-test/ticket-dash-test.component';
import { TicketsLandingPageComponent } from './Components/tickets-landing-page/tickets-landing-page.component';
import { TicketsMenuTestComponent } from './Components/tickets-menu-test/tickets-menu-test.component';
import { UsersDatabaseComponent } from './Components/users-database/users-database.component';

const routes: Routes = [

  { path: 'TicketDashBoard',component:TicketDashTestComponent,canActivate:[AdminsGuard]},
  { path: 'TicketsAppBoard',component:TicketsMenuTestComponent,canActivate:[AdminsGuard]},
  { path: 'TicketsLandingPage', component: TicketsLandingPageComponent, canActivate: [AdminsGuard] },
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
