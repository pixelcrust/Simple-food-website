import { Injectable } from '@angular/core';
import { Idish } from './menu';
@Injectable({
  providedIn: 'root'
})
export class CartService {
  cart: Array<Idish> = [];
  constructor() { }
  addToCart(dish: Idish){
    this.cart.push(dish);
  }
  getCart(){
    return this.cart;
  }
}
