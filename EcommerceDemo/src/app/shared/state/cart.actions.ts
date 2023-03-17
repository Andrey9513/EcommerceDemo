import {Action} from '@ngrx/store';
import { Product } from '../models/product';


export enum CartActionsTypes {
  ADD_PRODUCT = "Add product to cart"
}


export class AddProduct implements Action {
  readonly type = CartActionsTypes.ADD_PRODUCT.toString()

  constructor(public payload?: Product)
  {

  }
}


export type CartAction = AddProduct;
