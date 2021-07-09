import { NgModule } from '@angular/core';
import { MatButtonModule } from "@angular/material/button";
import { MatInputModule } from "@angular/material/input";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatCardModule } from "@angular/material/card";
import { MatTableModule } from "@angular/material/table";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatSortModule } from "@angular/material/sort";
import { MatSlideToggleModule } from "@angular/material/slide-toggle";
import { MatSelectModule } from "@angular/material/select";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatNativeDateModule } from '@angular/material/core';
import { MatIconModule } from "@angular/material/icon";
import { MatDialogModule } from "@angular/material/dialog";

const MaterialComponents = [
MatDialogModule,
MatButtonModule,
MatInputModule,
MatFormFieldModule,
MatCardModule,
MatTableModule,
MatPaginatorModule,
MatSortModule,
MatSlideToggleModule,
MatSelectModule,
MatDatepickerModule,
MatNativeDateModule,
MatIconModule


];
 
@NgModule({
 imports:  [MaterialComponents],
 exports: [MaterialComponents]
})
export class AngularUI { }