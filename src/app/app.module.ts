import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from "@angular/forms";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
//componentes
import { AppComponent } from './app.component';
<<<<<<< HEAD
import { LoginComponent} from 'src/app/Components/login/login.component';
import { GenerateTicketsRequestComponent } from "src/app/Components/generate-tickets-request/generate-tickets-request.component";
=======
import { LoginComponent} from 'src/app/Components/login/login.component'
import { TicketsLandingPageComponent } from "src/app/Components/tickets-landing-page/tickets-landing-page.component";
import { GenerateTicketsRequestComponent } from "src/app/Components/generate-tickets-request/generate-tickets-request.component";

>>>>>>> a6219970dab3fc6ab5a713d0084503d244244c6d

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
<<<<<<< HEAD
    GenerateTicketsRequestComponent
=======
    TicketsLandingPageComponent,
    GenerateTicketsRequestComponent,
   
>>>>>>> a6219970dab3fc6ab5a713d0084503d244244c6d
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
