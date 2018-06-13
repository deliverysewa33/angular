import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { Config } from '../Configuration/config';

@Injectable()
export class AuthenticateService {

  httpOptions: any;
  httpHeaders: any;
  isLoggedIn:boolean =false ;
  checkedToken:boolean = false;
  constructor(private http: HttpClient, private cookie: CookieService) {  
    this.setHeaders('' , '');
  }
 


  setHeaders(key, value) {
    var authToken = this.cookie.get('authorization');
    this.httpHeaders = new HttpHeaders();
    this.httpHeaders = this.httpHeaders.append('Content-Type', 'application/json'),
      this.httpHeaders = this.httpHeaders.append('authorization', 'Bearer ' + authToken);
    if (key != '' || value != '') {
      this.httpHeaders = this.httpHeaders.append(key, value);
    }
    this.httpOptions = {
      headers: this.httpHeaders
    };

  }

  setLoggedIn(value){
    this.checkedToken = value;
    this.isLoggedIn = value;
  }
  getLoggedIn(){
    
    return this.isLoggedIn;
  }

  checkTokenValidation(){
    this.setHeaders('' , '');
    return this.http.get(Config.loginUrl.concat('checkToken'),this.httpOptions);
  }
  
  getTokenCheck(){
    return this.checkedToken;
  }
}
