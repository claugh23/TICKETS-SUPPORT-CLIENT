import { HttpResponseBase } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { LicensesModel } from "src/app/Interfaces/ILicenses";
import { LicensesService } from "src/app/Services/Licenses/licenses.service";
@Component({
  selector: 'app-licenses-dates',
  templateUrl: './licenses-dates.component.html',
  styleUrls: ['./licenses-dates.component.css']
})
export class LicensesDatesComponent implements OnInit {

  listaLicencias: LicensesModel[];
  FormAddLicense: FormGroup;
  FormEditLicenses: FormGroup;
  CleanInputs:string;

  //statements
  ShowNoInfoAlert:boolean


  constructor(private FormAddBuilder: FormBuilder, private FormEditBuilder: FormBuilder, private APILicenses: LicensesService) {

    this.FormAddLicense = this.FormAddBuilder.group({
      FormLicenseName: new FormControl(),
      FormLicenseType: new FormControl(),
      FormLicenseDate: new FormControl(),
      FormLicenseDescription: new FormControl(),
      FormLicenseCompany: new FormControl(),
    })

    this.FormEditLicenses = this.FormEditBuilder.group({
      FormEditLicenseName: new FormControl(),
      FormEditLicenseType: new FormControl(),
      FormEditLicenseDate: new FormControl(),
      FormEditLicenseDescription: new FormControl(),
      FormEditLicenseCompany: new FormControl()
    })

  }

  async ObtainLicenses(){
    (await this.APILicenses.GetLicenses()).subscribe(results =>{
      this.listaLicencias = results;
    })

   
 }


  async CreateLicense(){

    
    const newLicense: LicensesModel ={
      _id:'',
      licenseName: this.FormAddLicense.get('FormLicenseName').value,
      category:this.FormAddLicense.get('FormLicenseType').value,
      expirationDate:this.FormAddLicense.get('FormLicenseDate').value,
      description: this.FormAddLicense.get('FormLicenseDescription').value,
      company:this.FormAddLicense.get('FormLicenseCompany').value
    };
    
    (await this.APILicenses.PostLicense(newLicense)).subscribe(() =>{
     
    },(exception:HttpResponseBase) => {
      alert(exception.statusText)
      this.ObtainLicenses();
      this.CleanInputs = "";
    })
   
  }

 
  ngOnInit() {
   

    this.ObtainLicenses();
  
   
  }

}
