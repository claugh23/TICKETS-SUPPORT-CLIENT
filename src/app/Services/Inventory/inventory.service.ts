import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { InventoryItemModel } from "src/app/Interfaces/IInventory";
@Injectable({
  providedIn: 'root'
})
export class InventoryService {

  ServerInventory = 'https://webapiticketssupport20210607091925.azurewebsites.net/api/Inventory/';
  ServerLoadSelectedInventory = 'https://webapiticketssupport20210607091925.azurewebsites.net/api/Inventory/GetInventorySelected/';
  ServerMaintainceInventory = 'https://webapiticketssupport20210607091925.azurewebsites.net/api/Inventory/DeleteItemInventory/';
  constructor(private httpRequest:HttpClient) { }

  PostInventario(item:InventoryItemModel):Observable<InventoryItemModel>{

    return this.httpRequest.post<InventoryItemModel>(this.ServerInventory,item);

  }

  PostDeleteItem(item:InventoryItemModel){
    return this.httpRequest.post<InventoryItemModel>(this.ServerMaintainceInventory,item);
  }

  GetCurrentInventory(category:string){
   
    return this.httpRequest.get<InventoryItemModel[]>(this.ServerInventory+category);

  }

  PutItemInventory(item:InventoryItemModel){

    return this.httpRequest.put<InventoryItemModel[]>(this.ServerInventory,item);

  }

}
