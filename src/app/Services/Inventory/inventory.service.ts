import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { InventoryItemModel } from "src/app/Interfaces/IInventory";
@Injectable({
  providedIn: 'root'
})
export class InventoryService {

  ServerInventory = 'https://localhost:5001/api/Inventory/';
  ServerLoadSelectedInventory = 'https://localhost:5001/api/Inventory/GetInventorySelected/'
  constructor(private httpRequest:HttpClient) { }

  PostInventario(item:InventoryItemModel):Observable<InventoryItemModel>{
    return this.httpRequest.post<InventoryItemModel>(this.ServerInventory,item);
  }

  GetCurrentInventory(category:string){
    //let paramsSearch =new HttpParams().set('InventoryComputers',category);
    return this.httpRequest.get<InventoryItemModel[]>(this.ServerInventory+category);

  }

}
