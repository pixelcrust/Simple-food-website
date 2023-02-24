import { Component } from '@angular/core';
import { CartService } from '../cart.service';
import { Idish } from '../menu';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  cart : Array<Idish> = [];
  constructor(private cartservice: CartService){
  
  }
  ngOnInit():void{
    this.cart = this.cartservice.getCart();
  }

  getTotal():number{
    let total = 0;
    for(let i = 0; i<this.cart.length; i++){
      total += this.cart[i].price;
    }
    return total*1.1;
  }
  getDiscountedPrice(total:number):number{
    return total *= 0.9;
  }
}
