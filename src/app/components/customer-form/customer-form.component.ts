import { Component, OnInit } from '@angular/core';
import { Delivery } from '../../model/delivery';
import { NgForm } from '@angular/forms';
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
  submitted = false;
  state:string;
  constructor(private _address:CreateCustomerService) { }

  ngOnInit() {
    // this.add = new Address;
    this.getAllState();
  }




  onSubmit(form: NgForm) {
    this.submitted = true;
    console.log(form.value)
  }

  getAllState() {
    this._address.listState().subscribe(data => {
      console.log('item', this.data);
      this.add = data;
      console.log("item",  this.state);

    },

      error => {
        console.log('item Error', error)
      }

    );
  }

  getAllDistrictByState() {

  }

  getAllLocalLevelByDistrict() {

  }

}
