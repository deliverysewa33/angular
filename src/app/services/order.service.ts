import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Config } from '../Configuration/config';
import { CookieService } from 'ngx-cookie-service';
import { Order } from '../model/order';
@Injectable()
export class OrderService {
  httpOptions: any;
  httpHeaders: any;
  constructor(private _http: HttpClient,private cookie: CookieService) { 
    this.setHeaders('','')
  }

  setHeaders(key, value) {
    var authToken = this.cookie.get('authorization');
    var loginId=this.cookie.get('loginId');
    var customerId=this.cookie.get('customerId');
    this.httpHeaders = new HttpHeaders();
    this.httpHeaders = this.httpHeaders.append('Content-Type', 'application/json'),
    this.httpHeaders = this.httpHeaders.append('authorization', 'Bearer ' + authToken);
    this.httpHeaders = this.httpHeaders.append('loginId',  loginId );
    this.httpHeaders = this.httpHeaders.append('customerId', customerId );
    if (key != '' || value != '') {
      this.httpHeaders = this.httpHeaders.append(key, value);
    }
    this.httpOptions = {
      headers: this.httpHeaders
    };

  }

   saveOrder(value){
    this.setHeaders('','')
    console.log(value);
    return this._http.post(Config.orderUrl,value,this.httpOptions,)
  }

  listAllCustomerOrder(){
    this.setHeaders('','')
    return this._http.get<Order[]>(Config.orderUrl.concat('listAllCustomerOrder'),this.httpOptions);
  }

}
