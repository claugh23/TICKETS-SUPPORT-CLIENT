import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GenerateTicketsRequestComponent } from './Components/generate-tickets-request/generate-tickets-request.component';

const routes: Routes = [

  {path:'TicketsGenerator',component:GenerateTicketsRequestComponent},
  { path:'**',redirectTo:'/'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
