import * as cartActions from "./cart.actions";
import { Product } from "../models/product";
import * as app from "../../state/app-state";
import { List } from "immutable";
import { createFeatureSelector, createSelector } from "@ngrx/store";
import { CartGroup } from "../models/cartGroup";

export interface CartState {
  products: List<Product>
}

export interface  AppState extends app.AppState{
  cart: CartState
}

export const initState: CartState = {
  products: List()
}

export function cartReducer(state = initState, action: cartActions.CartAction) : CartState{
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

//const getCartFeatureState = createFeatureSelector<CartState>("cart")

export const getCartFeatureState = (state: AppState) => state.cart;

export const getProducts = createSelector(
  getCartFeatureState,
  (state: CartState) => state.products
)

export const getCount = createSelector(
  getProducts,
  (products: List<Product>) => products.size
)

export const getTotal = createSelector(
  getProducts,
  (products: List<Product>) => products.reduce((s,n) => s + n.price, 0))

export const getCartGroups = createSelector(
  getProducts,
  s => s.reduce((groups, product) =>
    {
      const { id, title, price} = product;
      const group = groups.filter(g => g.id === id)[0]
      if (!!group)
      {
          group.quantity++;
          group.cost += product.price;
      }
      else
      {
          groups.push({ id: id, title: title, quantity: 1, cost: price});
      }
      return groups;

    }, [] as CartGroup[]))
