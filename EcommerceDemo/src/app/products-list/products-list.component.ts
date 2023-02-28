import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Product } from '../models/product';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent {
  products: Product[] = [{
      title: "Apple",
      price: 35
  },
  {
    title: "Pineapple",
    price: 100
  },
  {
    title: "Pear",
    price: 50
  },
  {
    title: "Orange",
    price: 70
  }]

  ProductsList(){
    
  }
}
