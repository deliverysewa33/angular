import { Component, OnInit } from '@angular/core';
import { HomeService } from '../../../services/home.service';
import { Items } from '../../../model/items';
import { FormControl, FormGroup } from '@angular/forms';
import { NgForm } from '@angular/forms';
import { OrderService } from '../../../services/order.service';
import { Order } from '../../../model/order';
import swal from 'sweetalert2';
@Component({
  selector: 'app-chome',
  templateUrl: './chome.component.html',
  styleUrls: ['./chome.component.css']
})
export class ChomeComponent implements OnInit {
  model = new Order();
  submitted = false;
  success: boolean = false;
  error: boolean = false;
  data: any;
  item: Items[];
  message:string;
  constructor(private _product: HomeService,private _orderService:OrderService) { }

  ngOnInit() {
    this.showAllProduct();
    this.onSubmit;
  }
  showAllProduct() {
    this._product.listProduct().subscribe(data => {

      console.log('Gallery', this.data);
      this.item = data;
      console.log('gal', this.item);
    },
      error => {
        console.log('Gellery Error', error)
      });

  }
  onSubmit(form: NgForm) {
    this.submitted = true;
    console.log(form.value)
    this._orderService.saveOrder(form.value).subscribe(data => {
      console.log("Credentials", data);
      console.log(data);
      this.success = true;
      this.message=data['message'];
      swal(this.message, " " , "info");
  }, error => {
    console.log('User Error', error)


  });
}
}
