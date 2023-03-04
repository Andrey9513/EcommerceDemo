import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartModuleRoutingModule } from './cart-module-routing.module';
import { CartComponent } from './components/cart-component/cart.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { CartProductComponent } from './components/cart-product/cart-product.component';
import { TotalCostComponent } from './components/total-cost/total-cost.component';


@NgModule({
  declarations: [
    CartComponent,
    CartProductComponent,
    TotalCostComponent,
  ],
  imports: [
    CommonModule,
    CartModuleRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatListModule,
  ]
})
export class CartModuleModule { }
