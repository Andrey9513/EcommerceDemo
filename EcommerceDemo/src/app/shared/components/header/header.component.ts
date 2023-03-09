import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{

  itemsCount: number = 0;

  ngOnInit(): void {
    this.cartService.getCount().subscribe(c => this.itemsCount = c);

  }

  constructor(private cartService : CartService)
  {

  }


}
