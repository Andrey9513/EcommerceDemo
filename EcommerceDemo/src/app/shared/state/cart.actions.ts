import {Action} from '@ngrx/store';
import { Product } from '../models/product';
import { CartState } from './cart.reducer';


export enum CartActionsTypes {
  ADD_PRODUCT = "Add product to cart",
  HYDRATE_CART = "Hydrate cart from local storage",
  HYDRATE_CART_SUCCESS = "Cart hydrated successfully",
  HYDRATE_CART_FAIL = "Cart hydrating failed"
}


export class AddProduct implements Action {
  readonly type = CartActionsTypes.ADD_PRODUCT.toString()

  constructor(public payload?: Product)
  {

  }
}

export class HydrateCart implements Action {
  readonly type = CartActionsTypes.HYDRATE_CART.toString()

  constructor()
  {

  }
}

export class HydrateCartSuccess implements Action {
  readonly type = CartActionsTypes.HYDRATE_CART_SUCCESS.toString()

  constructor(public state: CartState)
  {

  }
}

export class HydrateCartFailed implements Action {
  readonly type = CartActionsTypes.HYDRATE_CART_FAIL.toString()
}


export type CartAction = AddProduct | HydrateCart | HydrateCartSuccess | HydrateCartFailed;
