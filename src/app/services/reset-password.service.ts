import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Config } from '../Configuration/config';
import {ActivatedRoute} from "@angular/router";
@Injectable()
export class ResetPasswordService {

  constructor(private http:HttpClient) { 
    
  
  }

  
  token:string;
  

  forgetPassword(value){
    return this.http.post(Config.loginUrl.concat('forgetPassword'),value);
  }

  resetPassword(value,token){
    
    return this.http.post(Config.loginUrl.concat('resetPassword/').concat(token),value,{
      headers: token
    });

  }

}


