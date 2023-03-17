import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
import {Store, select} from "@ngrx/store";

import * as fromCart from "../../state/cart.reducer";
import { defaultIfEmpty, Observable } from 'rxjs';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{

  itemsCount$!: Observable<number>;

  ngOnInit(): void {
    //this.cartService.getCount().subscribe(c => this.itemsCount = c);
    this.itemsCount$ = this.store.pipe(select(fromCart.getCount))
  }

  constructor(private cartService : CartService, private store:Store<fromCart.AppState>)
  {

  }


}
