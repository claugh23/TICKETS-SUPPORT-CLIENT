import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { AngularUI } from 'src/app/Modules/AngularMaterialUI';
//componentes
import { AppComponent } from './app.component';
import { LoginComponent } from 'src/app/Components/login/login.component';
import { GenerateTicketsRequestComponent } from "src/app/Components/generate-tickets-request/generate-tickets-request.component";
import { TicketsLandingPageComponent } from "src/app/Components/tickets-landing-page/tickets-landing-page.component";
import { NavigationComponent } from './Components/navigation/navigation.component';
import { CompletedTicketsComponent } from './Components/completed-tickets/completed-tickets.component';
import { UsersDatabaseComponent } from './Components/users-database/users-database.component';
import { EmailDashboardComponent } from './Components/email-dashboard/email-dashboard.component';
import { ContactListComponent } from './Components/contact-list/contact-list.component';
import { InventoryComponent } from './Components/inventory/inventory.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    GenerateTicketsRequestComponent,
    TicketsLandingPageComponent,
    NavigationComponent,
    CompletedTicketsComponent,
    UsersDatabaseComponent,
    EmailDashboardComponent,
    ContactListComponent,
    InventoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AngularUI
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
