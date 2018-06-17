import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Address } from '../model/address';
import { Config } from '../Configuration/config';
@Injectable()
export class CreateCustomerService {

  state:string;
  constructor(private _http: HttpClient) { }

  listState(){
    return this._http.get<Address[]>(Config.stateUrl);
  }

  listDistrict(state){
    return this._http.get<Address[]>(Config.itemsUrl.concat('state'));
  }

  listLocalLevel(){
    return this._http.get<Address[]>(Config.itemsUrl);
  }
}
