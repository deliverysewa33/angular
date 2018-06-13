import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Config } from '../Configuration/config';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class UserServiceService {

  constructor(private http:HttpClient) { }

  signInUser(value){
    return this.http.post(Config.loginUrl.concat('login'),value);
  } 
  }

