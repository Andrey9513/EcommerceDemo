import * as cartActions from "./cart.actions";
import { Product } from "../models/product";
import * as app from "../../state/app-state";
import { List } from "immutable";
import { Action, ActionReducer, createFeatureSelector, createSelector } from "@ngrx/store";
import { CartGroup } from "../models/cartGroup";
import { INITIAL_OPTIONS } from "@ngrx/store-devtools";

export interface CartState {
  products: List<Product>
}

export interface  AppState extends app.AppState{
  cart: CartState
}

export const initState: CartState = {
  products: List()
}

export const cartReducer: CartReducer = (state = initState, action) => {
  switch(action.type){
    case cartActions.CartActionsTypes.ADD_PRODUCT:{
      return {
        ...state,
        products: state.products.push((action as cartActions.AddProduct).payload!)
      }
    }
    default:
      return state;
  }
}


function isHydrateSuccess(
  action: Action
) {
  return action.type === cartActions.CartActionsTypes.HYDRATE_CART_SUCCESS;
}

export const hydrationMetaReducer = (
  reducer: CartReducer
): CartReducer => {
  return (state, action) => {
    if (isHydrateSuccess(action)) {
      return (action as cartActions.HydrateCartSuccess).state;
    } else {
      return reducer(state, action);
    }
  };
};

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


export type CartReducer = (state: CartState | undefined, action: cartActions.CartAction) => CartState;
