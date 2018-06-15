import { Injectable } from '@angular/core';
import { HttpClient,HttpResponse } from '@angular/common/http';
import { Items } from '../model/items';
import { Config } from '../Configuration/config';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class HomeService {

  constructor(private _http: HttpClient) { }

    listProduct(){
      return this._http.get<Items[]>(Config.itemsUrl.concat('items'));
    }



    
    
}
