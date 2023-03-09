import { Component, Input, OnInit } from '@angular/core';
import { CartGroup } from 'src/app/shared/models/cartGroup';
import { CartService } from 'src/app/shared/services/cart.service';

@Component({
  selector: 'app-cart-component',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit{
  cartProducts : CartGroup[] = [];

  constructor(private cartService: CartService)
  {

  }

  ngOnInit(): void {
    this.cartService.getCartGroups().subscribe(cg => this.cartProducts = cg);
  }
}
