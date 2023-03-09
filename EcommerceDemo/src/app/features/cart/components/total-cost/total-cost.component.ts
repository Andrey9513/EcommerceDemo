import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/shared/services/cart.service';

@Component({
  selector: 'app-total-cost',
  templateUrl: './total-cost.component.html',
  styleUrls: ['./total-cost.component.scss']
})
export class TotalCostComponent implements OnInit{

  total:number = 0;

  ngOnInit(): void {
    this.cartService.getTotal().subscribe(t => this.total = t);
  }

  constructor(private cartService: CartService)
  {

  }
}
