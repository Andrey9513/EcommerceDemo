import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CartService } from 'src/app/shared/services/cart.service';
import { Product } from '../../../../shared/models/product';
import {Store, select} from "@ngrx/store";
import * as fromCart from "../../../../shared/state/cart.reducer";
import * as actions from "../../../../shared/state/cart.actions";
import { Observable } from 'rxjs';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
  @Input() product!: Product;
  @Output() productAdded = new EventEmitter<Product>();

  constructor(private cartService : CartService, private store: Store<fromCart.AppState> ) {}

  onProductAdded = () =>
  {
      // this.cartService.add(this.product);

      this.store.dispatch(new actions.AddProduct(this.product));
      this.productAdded.emit(this.product);

  }
}
