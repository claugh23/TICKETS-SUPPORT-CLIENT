import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { InventoryItemModel } from "src/app/Interfaces/IInventory";
@Injectable({
  providedIn: 'root'
})
export class InventoryService {

  ServerInventory = 'https://192.168.3.5:5001/api/Inventory/';

  ServerLoadSelectedInventory = 'https://192.168.3.5:5002/api/Inventory/GetInventorySelected/';
  ServerMaintainceInventory = 'https://192.168.3.5:5002/api/Inventory/DeleteItemInventory/';
  ServerMaintainceInventoryUpdated = 'https://192.168.3.5:5002/api/Inventory/DeleteItemInventory/';
  constructor(private httpRequest: HttpClient) { }

  async GetCurrentInventory(category: string) {

    return this.httpRequest.get<InventoryItemModel[]>(this.ServerInventory + category);

  }

  async PostInventario(item: InventoryItemModel): Promise<Observable<InventoryItemModel>> {

    return this.httpRequest.post<InventoryItemModel>(this.ServerInventory, item);

  }
  //this delete
  async PostDeleteItem(item: InventoryItemModel) {
    return this.httpRequest.post<InventoryItemModel>(this.ServerMaintainceInventory, item);
  }

  //this update
  async PutItemInventory(item: InventoryItemModel) {

    return this.httpRequest.put<InventoryItemModel[]>(this.ServerInventory, item);

  }

}
