import { Component, Input, OnInit } from '@angular/core';
import { CartGroup } from 'src/app/shared/models/cartGroup';
import { CartService } from 'src/app/shared/services/cart.service';
import {Store, select} from "@ngrx/store";
import * as fromCart from "../../../../shared/state/cart.reducer";
import { Observable } from 'rxjs';

@Component({
  selector: 'app-cart-component',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit{
  cartProducts$! : Observable<CartGroup[]>;

  constructor(private cartService: CartService, private store: Store<fromCart.AppState>)
  {

  }

  ngOnInit(): void {
    //this.cartService.getCartGroups().subscribe(cg => this.cartProducts$ = cg);
    this.cartProducts$ = this.store.pipe(select(fromCart.getCartGroups));
  }
}
