import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { InventoryItemModel } from 'src/app/Interfaces/IInventory';
import { InventoryService } from "src/app/Services/Inventory/inventory.service";
@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent implements OnInit {

  //Form
  FormItemInventory: FormGroup;
  FormItemCode = new FormControl();
  FormItemQuantity = new FormControl();
  FormItemTag = new FormControl();
  FormItemBrand = new FormControl();
  FormItemRoomLocation = new FormControl();
  FormItemCategory = new FormControl();
  FormItemStatus = new FormControl();

  //dynamic variables
  confirmInsert: boolean;
  ListInventory: InventoryItemModel;
  //Static variable for select
  GetItemCode: string;
  GetItemQuantity: Number;
  GetItemTag: string;
  GetItemBrand: string;
  GetItemRoomLocation: string;
  GetItemCategory: string;
  GetItemStatus: string;

  constructor(private InventoryAPI: InventoryService, private FormBuilderInventory: FormBuilder) {

    this.FormItemInventory = this.FormBuilderInventory.group({
      FormItemCode: ['',Validators.required],
      FormItemQuantity: ['', Validators.required],
      FormItemTag: ['', Validators.required],
      FormItemBrand: ['', Validators.required],
      FormItemRoomLocation: ['', Validators.required],
      FormItemCategory: ['', Validators.required],
      FormItemStatus: ['', Validators.required]
    })

  }

  InsertItem() {

    const NewItem: InventoryItemModel = {
      code: 'MBS-' + this.FormItemInventory.get('FormItemCode').value,
      quantity: Number.parseInt(this.FormItemInventory.get('FormItemQuantity').value),
      tag: this.FormItemInventory.get('FormItemTag').value,
      brand: this.FormItemInventory.get('FormItemBrand').value,
      roomLocation: this.FormItemInventory.get('FormItemRoomLocation').value,
      category: this.FormItemInventory.get('FormItemCategory').value,
      currentStatus: this.FormItemInventory.get('FormItemStatus').value
    };

    this.confirmInsert = confirm("THE INFORMATION IS CORRECT?");

    if (this.confirmInsert) {
      this.InventoryAPI.PostInventario(NewItem).subscribe((result: any) => {
        alert("YOU HAVE ENTER A NEW ITEM TO THE INVENTORY!!")
      }, (error: HttpErrorResponse) => {
        alert("SOMETHING HAPPEN IN THE SERVER: " + JSON.stringify(error.error));
      })
    }

  }
  /////////////////////////////////////////////
  async CaptureItemSelected(Code: string, Quantity: Number, Tag: string, Brand: string, RoomLocation: string, Category: string, CurrentStatus: string){
    const SelectionItem = { Code, Quantity, Tag, Brand, RoomLocation, Category, CurrentStatus }

    this.GetItemCode = SelectionItem.Code;
    this.GetItemQuantity = SelectionItem.Quantity;
    this.GetItemTag = SelectionItem.Tag;
    this.GetItemBrand = SelectionItem.Brand;
    this.GetItemRoomLocation = SelectionItem.RoomLocation;
    this.GetItemCategory = SelectionItem.Category;
    this.GetItemStatus = SelectionItem.CurrentStatus;
  }

  async UpdateItemInventory() {

    const UpdatedItem: InventoryItemModel = {
      code: 'MBS-' + this.FormItemCode.setValue(this.GetItemCode),
      quantity: Number.parseInt(this.FormItemInventory.get('FormItemQuantity').value),
      tag: '' + this.FormItemInventory.get('FormItemTag').setValue(this.GetItemTag),
      brand: '' + this.FormItemInventory.get('FormItemBrand').setValue(this.GetItemBrand),
      roomLocation: '' + this.FormItemInventory.get('FormItemRoomLocation').setValue(this.GetItemRoomLocation),
      category: '' + this.FormItemInventory.get('FormItemCategory').setValue(this.GetItemCategory),
      currentStatus:''+ this.FormItemInventory.get('FormItemStatus').setValue(this.GetItemStatus)
    };
   console.log(this.FormItemInventory);
  
  }
  ////////////////////////////////////////////
  GetInventoryComputers() {
    const categoryComputer = "COMPUTERS";
    this.InventoryAPI.GetCurrentInventory(categoryComputer).subscribe((result: any) => {

      this.ListInventory = result;
    })
  }
  GetInventoryNetworks() {
    const categoryComputer = "NETWORK DEVICES";
    this.InventoryAPI.GetCurrentInventory(categoryComputer).subscribe((result: any) => {

      this.ListInventory = result;
    })
  }
  GetInventoryCameras() {
    const categoryComputer = "SECURITY CAMERAS";
    this.InventoryAPI.GetCurrentInventory(categoryComputer).subscribe((result: any) => {

      this.ListInventory = result;
    })
  }
  GetInventorySound() {
    const categoryComputer = "SOUND EQUIPMENT";
    this.InventoryAPI.GetCurrentInventory(categoryComputer).subscribe((result: any) => {

      this.ListInventory = result;
    })
  }
  GetInventoryMultimedia() {
    const categoryComputer = "PROYECTION AND MULTIMEDIA DEVICES";
    this.InventoryAPI.GetCurrentInventory(categoryComputer).subscribe((result: any) => {

      this.ListInventory = result;
    })
  }
  GetInventoryTablets() {
    const categoryComputer = "TABLETS OR IPADS";
    this.InventoryAPI.GetCurrentInventory(categoryComputer).subscribe((result: any) => {

      this.ListInventory = result;
    })
  }
  GetInventorySoftware() {
    const categoryComputer = "SOFTWARE UTILITIES";
    this.InventoryAPI.GetCurrentInventory(categoryComputer).subscribe((result: any) => {

      this.ListInventory = result;
    })
  }

 
  ngOnInit() {
    this.confirmInsert = false;
    this.GetInventoryComputers();

    this.FormItemInventory.get('FormItemCode',).valueChanges.subscribe(CurrentValue => {
      this.GetItemCode = CurrentValue;
      this.FormItemCode.setValue(this.GetItemCode);
    })
    this.FormItemInventory.get('FormItemQuantity',).valueChanges.subscribe(CurrentValue => {
      this.GetItemQuantity = CurrentValue;
      this.FormItemQuantity.setValue(this.GetItemQuantity);
    })
    this.FormItemInventory.get('FormItemTag',).valueChanges.subscribe(CurrentValue => {
      this.GetItemTag = CurrentValue;
      this.FormItemQuantity.setValue(this.GetItemTag);
    })
    this.FormItemInventory.get('FormItemBrand',).valueChanges.subscribe(CurrentValue => {
      this.GetItemBrand = CurrentValue;
      this.FormItemQuantity.setValue(this.GetItemBrand);
    })
    this.FormItemInventory.get('FormItemRoomLocation',).valueChanges.subscribe(CurrentValue => {
      this.GetItemRoomLocation = CurrentValue;
      this.FormItemQuantity.setValue(this.GetItemRoomLocation);
    })
    this.FormItemInventory.get('FormItemCategory').valueChanges.subscribe(CurrentValue => {
      this.GetItemCategory = CurrentValue;
      this.FormItemCategory.setValue(this.GetItemCategory);
    })
    this.FormItemInventory.get('FormItemStatus').valueChanges.subscribe(CurrentValue => {
      this.GetItemStatus = CurrentValue;
      this.FormItemStatus.setValue(this.GetItemStatus);
    })
   
  }

}
