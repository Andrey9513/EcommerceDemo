import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CartService } from 'src/app/shared/services/cart.service';
import * as fromCart from "../../../../shared/state/cart.reducer";

@Component({
  selector: 'app-total-cost',
  templateUrl: './total-cost.component.html',
  styleUrls: ['./total-cost.component.scss']
})
export class TotalCostComponent implements OnInit{

  total$!: Observable<number>;

  ngOnInit(): void {
    this.total$ = this.store.pipe(select(fromCart.getTotal));
  }

  constructor(private cartService: CartService, private store: Store<fromCart.AppState> )
  {

  }
}
