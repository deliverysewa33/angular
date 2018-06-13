import { Component, OnInit } from '@angular/core';
import {HomeService} from '../../../services/home.service';
declare var $: any;
import swal from 'sweetalert2';
import { Items } from '../../../model/items';
import { error } from 'protractor';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  data:any;
  item: Items;
  constructor(private _product:HomeService) { 
 this.item=new Items

  }

  ngOnInit() {
  
  this._product.listProduct().subscribe(data  => {
    console.log('item', this.data);
   this.item =data;
    console.log("item",this.item);

  },

    error => {
      console.log('item Error', error)

    }


  );

  }

}
