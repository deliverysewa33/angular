import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Address } from '../model/address';
import { Config } from '../Configuration/config';
@Injectable()
export class CreateCustomerService {

  constructor(private _http: HttpClient) { }

  listState(){
    return this._http.get<Address[]>(Config.stateUrl);
  }

  listDistric(){
    return this._http.get<Address>(Config.itemsUrl);
  }

  listLocalLevel(){
    return this._http.get<Address>(Config.itemsUrl);
  }
}
