import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/shared/services/cart.service';
import { Product } from '../../../../shared/models/product';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent {

  products: Product[] = [{
      id: 1,
      title: "Apple",
      price: 35
  },
  {
    id: 2,
    title: "Pineapple",
    price: 100
  },
  {
    id: 3,
    title: "Pear",
    price: 50
  },
  {
    id: 5,
    title: "Orange",
    price: 70
  }]

  constructor(private cartService : CartService){
  }

  onProductAdded = (product : Product) =>
  {
  }

}
