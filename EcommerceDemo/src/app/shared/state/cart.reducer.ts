import * as cartActions from "./cart.actions";
import { Product } from "../models/product";
import * as app from "../../state/app-state";
import { List } from "immutable";
import { createFeatureSelector, createSelector } from "@ngrx/store";

export interface CartState {
  products: List<Product>
}

export interface  AppState extends app.AppState{
  cart: CartState
}

export const initialState: CartState = {
  products: List()
}

export function cartReducer(state = initialState, action: cartActions.CartAction) : CartState{
  switch(action.type){
    case cartActions.CartActionsTypes.ADD_PRODUCT:{
      return {
        ...state,
        products: state.products.push(action.payload!)
      }
    }
    default:
      return state;
  }
}

const getCartFeatureState = createFeatureSelector<CartState>("cart")

export const getCount = createSelector(
  getCartFeatureState,
  (state: CartState) => state.products.size
)
