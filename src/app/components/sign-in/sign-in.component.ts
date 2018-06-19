import { Component, OnInit } from '@angular/core';
import { Delivery } from '../../model/delivery';
import { FormControl, FormGroup } from '@angular/forms';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserServiceService } from '../../services/user-service.service';
import { AuthenticateService } from '../../services/authenticate.service';
import { CookieService } from 'ngx-cookie-service';
declare var $: any;
import swal from 'sweetalert2';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  model = new Delivery();
  submitted = false;
  success: boolean = false;
  error: boolean = false;
  message: string;
  id:number;
  role:string;
  Latitude:number;
  Longitude:number;
  constructor(private router: Router, private userService: UserServiceService, private _authService: AuthenticateService, private cookie: CookieService) { }

  ngOnInit() {
    this.onSubmit  

  }
  onSubmit(form: NgForm) {
    this.submitted = true;
    console.log("value",form.value);
    this.userService.signInUser(form.value).subscribe(data => {
      console.log("Credentials", data);
      console.log(data);
      this.success = true;
      this.cookie.set('authorization', data['token']);
      this._authService.setLoggedIn(true);
      this.cookie.set('loginId',data['loginId']);
      this.cookie.set('loginType',data['loginType']);
      this.role=this.cookie.get('loginType')

      if(this.role=='ADMIN'){
        this.cookie.set('userId',data['userId'])
        this.router.navigate(['/adminDashboard']);
      }else if(this.role=='CUSTOMER'){
        this.cookie.set('customerId',data['customerId'])
        this.router.navigate(['/customer']);
      }else{
        this.cookie.set('storeId',data['storeId'])
        this.router.navigate(['/front']);
      }

    },
      error => {
        this.error = true;
        this._authService.setLoggedIn(false);
        if (error.error['message']) {
          this.message = error.error['message'];
          swal(this.message, " " , "error");
          
        }
        else {
          this.message = error.message;

        }

      });
  }
}

