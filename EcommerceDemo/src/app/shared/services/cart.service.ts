import { group } from '@angular/animations';
import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { CartGroup } from '../models/cartGroup';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cartState$ : BehaviorSubject<Product[]> = new BehaviorSubject<Product[]>([]);

  constructor() { }

  getCount = () : Observable<number> => this.cartState$.pipe(map(s => s.length));

  getTotal = (): Observable<number> => this.cartState$.pipe(map(s => s.reduce((s,n) => s + n.price, 0)))

  getProducts = (): Observable<Product[]> => this.cartState$.asObservable();

  getCartGroups = () : Observable<CartGroup[]>  => this.cartState$.pipe(
    map(s => s.reduce((groups, product) =>
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

    }, [] as CartGroup[])));

  add = (product: Product) : void  => {
    const currentCart = this.cartState$.value;
    currentCart.push(product);
    this.cartState$.next(currentCart);
  }

}


