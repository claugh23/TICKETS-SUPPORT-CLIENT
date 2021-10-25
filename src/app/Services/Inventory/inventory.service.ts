import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { InventoryItemModel } from "src/app/Interfaces/IInventory";
@Injectable({
  providedIn: 'root'
})
export class InventoryService {

  ServerInventory = 'https://spring-app-tickets.herokuapp.com//api/Inventory/';

  ServerLoadSelectedInventory = 'https://spring-app-tickets.herokuapp.com//api/Inventory/GetInventorySelected/';
  ServerMaintainceInventory = 'https://spring-app-tickets.herokuapp.com//api/Inventory/';
  ServerMaintainceInventoryUpdated = 'https://spring-app-tickets.herokuapp.com//api/Inventory/DeleteItemInventory/';
  constructor(private httpRequest: HttpClient) { }

  async GetCurrentInventory() {

    return this.httpRequest.get<InventoryItemModel[]>(this.ServerInventory);

  }

  async PostInventario(item: InventoryItemModel): Promise<Observable<InventoryItemModel>> {

    return this.httpRequest.post<InventoryItemModel>(this.ServerInventory, item);

  }
  //this delete
   DeleteItem(Currentid: string): Observable<string> {
    return this.httpRequest.delete<string>(this.ServerInventory+Currentid);
  }

  //this update
  async PutItemInventory(item: InventoryItemModel) {

    return this.httpRequest.put<InventoryItemModel[]>(this.ServerInventory, item);

  }

}
