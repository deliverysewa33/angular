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

    $('form').submit( function()  {
      if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(showPosition);
      } else { 
        return false;
      }
  })
   
  
  function showPosition(position) {
     this.Latitude= position.coords.latitude;
      this.Longitude=  position.coords.longitude;
  }
  

  }
  onSubmit(form: NgForm) {
    this.submitted = true;
    // console.log(form.value);
    console.log(form.value);
    this.userService.signInUser(form.value).subscribe(data => {
      console.log("Credentials", data);
      console.log(data);
      this.success = true;
      this.cookie.set('authorization', data['token']);
      this._authService.setLoggedIn(true);
      this.cookie.set('id',data['id']);
     this.cookie.set('loginType',data['loginType']);
      this.role=this.cookie.get('loginType')
      console.log(this.Latitude);
      if(this.role=='ADMIN'){
        this.router.navigate(['/adminDashboard']);
      }else if(this.role=='CUSTOMER'){
        this.router.navigate(['/customer']);
      }else{
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

