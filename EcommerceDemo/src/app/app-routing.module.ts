import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes =
[
  { path: 'products', loadChildren: () => import('./features/product-list/product-list.module').then(m => m.ProductListModuleModule) },
  { path: 'cart', loadChildren: () => import('./features/cart/cart-module.module').then(m => m.CartModuleModule) },
  { path: '',   redirectTo: '/products', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
