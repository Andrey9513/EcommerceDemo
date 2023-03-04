import { Component, Input } from '@angular/core';
import { CartGroup } from 'src/app/shared/models/cartGroup';

@Component({
  selector: 'app-cart-product',
  templateUrl: './cart-product.component.html',
  styleUrls: ['./cart-product.component.scss']
})
export class CartProductComponent {
  @Input() product!: CartGroup;

}
