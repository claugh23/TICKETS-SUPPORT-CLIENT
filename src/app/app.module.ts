import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from "@angular/forms";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
//componentes
import { AppComponent } from './app.component';
import { LoginComponent} from 'src/app/Components/login/login.component'
import { TicketsLandingPageComponent } from "src/app/Components/tickets-landing-page/tickets-landing-page.component";
import { GenerateTicketsRequestComponent } from "src/app/Components/generate-tickets-request/generate-tickets-request.component";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TicketsLandingPageComponent,
    GenerateTicketsRequestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
