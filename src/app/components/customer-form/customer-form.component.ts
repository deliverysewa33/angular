import { Component, OnInit } from '@angular/core';
import { Delivery } from '../../model/delivery';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-customer-form',
  templateUrl: './customer-form.component.html',
  styleUrls: ['./customer-form.component.css']
})
export class CustomerFormComponent implements OnInit {
model= new Delivery();
validateEmail = true;

submitted=false;
  constructor() { }

  ngOnInit() {
  }
  onSubmit(form:NgForm){
this.submitted=true;
console.log(form.value)
  }
}
