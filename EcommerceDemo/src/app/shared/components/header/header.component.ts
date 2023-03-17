import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
import {Store, select} from "@ngrx/store";

import * as fromCart from "../../state/cart.reducer";
import { Observable } from 'rxjs';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{

  itemsCount$!: Observable<number>;

  ngOnInit(): void {
    this.itemsCount$ = this.store.pipe(select(fromCart.getCount))
  }

  constructor(private store:Store<fromCart.AppState>)
  {

  }


}
