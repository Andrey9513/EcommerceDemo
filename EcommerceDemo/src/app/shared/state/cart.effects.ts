import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType, OnInitEffects } from "@ngrx/effects";
import { Action, Store } from "@ngrx/store";
import { distinctUntilChanged, map, switchMap, tap } from "rxjs/operators";
import { CartState } from "../state/cart.reducer";
import * as CartActions from "./cart.actions";

@Injectable()
export class HydrationEffects implements OnInitEffects {
  hydrate$ = createEffect(() =>
    this.action$.pipe(
      ofType(CartActions.HydrateCart.toString()),
      map(() => {
        const storageValue = localStorage.getItem("state");
        if (storageValue) {
          try {
            const state = JSON.parse(storageValue);
            return new CartActions.HydrateCartSuccess(state);
          } catch {
            localStorage.removeItem("state");
          }
        }
        return new CartActions.HydrateCartFailed();
      })
    )
  );

  constructor(private action$: Actions, private store: Store<CartState>) {}

  ngrxOnInitEffects(): Action {
    return new CartActions.HydrateCart();
  }
}
