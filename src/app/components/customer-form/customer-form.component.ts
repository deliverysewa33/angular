import { Component, OnInit } from '@angular/core';
import { Delivery } from '../../model/delivery';
import { NgForm,FormGroup,FormControl,Validators } from '@angular/forms';
import { CreateCustomerService } from '../../services/create-customer.service';
import { Address } from '../../model/address';
@Component({
  selector: 'app-customer-form',
  templateUrl: './customer-form.component.html',
  styleUrls: ['./customer-form.component.css'],

})
export class CustomerFormComponent implements OnInit {
  model = new Delivery();
  validateEmail = true;
  data: any;
  add: Address[];
  dist: Address[];
  state:string;
  district:string;
  submitted = false;
  registerForm: FormGroup;
  constructor(private _address:CreateCustomerService) { }

  ngOnInit() {
    
    this.getAllState();
    this.getAllDistrictByState;

  }

  



   
  onSubmit(form: NgForm){
    return this._address.createCustomer(form.value).subscribe(data =>{
       console.log("Credentials",data);
       console.log(data);
       console.log(form.value);
      //  this.router.navigate(['/front']);
     });
    }


  getAllState() {
    this._address.listState().subscribe(data => {
      console.log('state', this.data);
      this.add = data;
      console.log("state",  this.add);
      this.getAllDistrictByState;
    },

      error => {
        console.log('item Error', error)
      }

    );
  }

  getAllDistrictByState(frm:NgForm) {
    this.state=frm.value('state');
    console.log(this.state)
    this._address.listDistrict(this.state).subscribe(data => {
      console.log('district', this.data);
      this.dist = data;
      console.log("district",  this.dist);

    },

      error => {
        console.log('item Error', error)
      }

    );

  }

  getAllLocalLevelByDistrict() {

  }

}
