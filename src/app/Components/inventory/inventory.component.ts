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
  //dynamic variables
  confirmInsert: boolean;
  ListInventory: InventoryItemModel;
  //Static variable for select
  GetIdItem: string;
  GetItemCode: string;
  GetItemQuantity: Number;
  GetItemTag: string;
  GetItemBrand: string;
  GetItemRoomLocation: string;
  GetItemCategory: string;
  GetItemStatus: string;

  constructor(private InventoryAPI: InventoryService, private FormBuilderInventory: FormBuilder) {

    this.FormItemInventory = this.FormBuilderInventory.group({
      FormItemCode: new FormControl(),
      FormItemQuantity: new FormControl(),
      FormItemTag: new FormControl(),
      FormItemBrand: new FormControl(),
      FormItemRoomLocation: new FormControl(),
      FormItemCategory: new FormControl(),
      FormItemStatus: new FormControl()
    })

  }

  async InsertItem() {

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
      (await this.InventoryAPI.PostInventario(NewItem)).subscribe((result: any) => {
        alert("YOU HAVE ENTER A NEW ITEM TO THE INVENTORY!!")
      }, (error: HttpErrorResponse) => {
        alert("SOMETHING HAPPEN IN THE SERVER: " + JSON.stringify(error.error));
        this.confirmInsert = true;
      })
    }

  }
  /////////////////////////////////////////////
  async CaptureItemSelected(IdSelected: string, Code: string, Quantity: Number, Tag: string, Brand: string, RoomLocation: string, Category: string, CurrentStatus: string) {

    const SelectionItem = { IdSelected, Code, Quantity, Tag, Brand, RoomLocation, Category, CurrentStatus }

    this.GetIdItem = SelectionItem.IdSelected;
    this.GetItemCode = SelectionItem.Code;
    this.GetItemQuantity = SelectionItem.Quantity;
    this.GetItemTag = SelectionItem.Tag;
    this.GetItemBrand = SelectionItem.Brand;
    this.GetItemRoomLocation = SelectionItem.RoomLocation;
    this.GetItemCategory = SelectionItem.Category;
    this.GetItemStatus = SelectionItem.CurrentStatus;

    this.FormItemInventory.patchValue(
      { FormItemCode: this.GetItemCode },
    )
    this.FormItemInventory.patchValue(
      { FormItemQuantity: this.GetItemQuantity },
    )
    this.FormItemInventory.patchValue(
      { FormItemTag: this.GetItemTag },
    )
    this.FormItemInventory.patchValue(
      { FormItemBrand: this.GetItemBrand },
    )
    this.FormItemInventory.patchValue(
      { FormItemRoomLocation: this.GetItemRoomLocation },
    )
    this.FormItemInventory.patchValue(
      { FormItemCategory: this.GetItemCategory },
    )
    this.FormItemInventory.patchValue(
      { FormItemStatus: this.GetItemStatus },
    )

    this.confirmInsert = false;
  }

  async UpdateItemInventory() {

    const UpdatedItem: InventoryItemModel = {
      _id: this.GetIdItem,
      code: this.FormItemInventory.get('FormItemCode').value,
      quantity: Number.parseInt(this.FormItemInventory.get('FormItemQuantity').value),
      tag: this.FormItemInventory.get('FormItemTag').value,
      brand: this.FormItemInventory.get('FormItemBrand').value,
      roomLocation: this.FormItemInventory.get('FormItemRoomLocation').value,
      category: this.FormItemInventory.get('FormItemCategory').value,
      currentStatus: this.FormItemInventory.get('FormItemStatus').value
    };
    (await this.InventoryAPI.PutItemInventory(UpdatedItem)).subscribe(() => {
      alert("SE ACTUALIZO EL ITEM: " + UpdatedItem.code)
    }, (error: HttpErrorResponse) => {
      this.confirmInsert = true;

    })

  }

  async DeleteItemInventory() {

    const DeleteItem: InventoryItemModel = {
      _id: this.GetIdItem,
      code: '',
      quantity: 0,
      tag: '',
      brand: '',
      roomLocation: '',
      category: this.FormItemInventory.get('FormItemCategory').value,
      currentStatus: ''
    };

    (await this.InventoryAPI.PostDeleteItem(DeleteItem)).subscribe(() => {
      console.log("ALGO OCURRIO EN EL APP");

    }, (error: HttpErrorResponse) => {
      alert("ITEM: " + DeleteItem._id + " HA SIDO ELIMINADO")
    })
  }
  ////////////////////////////////////////////
  async GetInventoryComputers() {
    const categoryComputer = "COMPUTERS";
    (await this.InventoryAPI.GetCurrentInventory(categoryComputer)).subscribe((result: any) => {

      this.ListInventory = result;
    })
  }
  async GetInventoryNetworks() {
    const categoryComputer = "NETWORK DEVICES";
    (await this.InventoryAPI.GetCurrentInventory(categoryComputer)).subscribe((result: any) => {

      this.ListInventory = result;
    })
  }
  async GetInventoryCameras() {
    const categoryComputer = "SECURITY CAMERAS";
    (await this.InventoryAPI.GetCurrentInventory(categoryComputer)).subscribe((result: any) => {

      this.ListInventory = result;
    })
  }
  async GetInventorySound() {
    const categoryComputer = "SOUND EQUIPMENT";
    (await this.InventoryAPI.GetCurrentInventory(categoryComputer)).subscribe((result: any) => {

      this.ListInventory = result;
    })
  }
  async GetInventoryMultimedia() {
    const categoryComputer = "PROYECTION AND MULTIMEDIA DEVICES";
    (await this.InventoryAPI.GetCurrentInventory(categoryComputer)).subscribe((result: any) => {

      this.ListInventory = result;
    })
  }
  async GetInventoryTablets() {
    const categoryComputer = "TABLETS OR IPADS";
    (await this.InventoryAPI.GetCurrentInventory(categoryComputer)).subscribe((result: any) => {

      this.ListInventory = result;
    })
  }
  async GetInventorySoftware() {
    const categoryComputer = "SOFTWARE UTILITIES";
    (await this.InventoryAPI.GetCurrentInventory(categoryComputer)).subscribe((result: any) => {

      this.ListInventory = result;
    })
  }


  ngOnInit() {
    this.confirmInsert = false;
    this.GetInventoryComputers();

    this.FormItemInventory.get('FormItemCode').valueChanges.subscribe(CurrentValue => {
      this.GetItemCode = CurrentValue;

    })

  }

}
