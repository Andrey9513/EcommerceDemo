import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CartService } from 'src/app/shared/services/cart.service';
import { Product } from '../../../../shared/models/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
  @Input() product!: Product;
  @Output() productAdded = new EventEmitter<Product>();

  constructor(private cartService : CartService) {}

  onProductAdded = () =>
  {
      this.cartService.add(this.product);
      this.productAdded.emit(this.product);
  }
}
