import { Component, OnInit } from '@angular/core';
import { OrderService } from '../../../services/order.service';
import { Order } from '../../../model/order';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  model = new Order();
  data:any;
  order:Order[];
  constructor(private _orderService:OrderService) { }
 
  ngOnInit() {
  this.listCustomerOrder();
  }

  listCustomerOrder(){
    this._orderService.listAllCustomerOrder().subscribe(data => {
      console.log('order', this.data);
      this.data=data;
      this.order=this.data;
      console.log('gal', this.order);
    },
      error => {
        console.log('Order Error', error)
      });

    
  }

}
