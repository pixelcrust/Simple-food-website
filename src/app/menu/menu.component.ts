import { Component } from '@angular/core';
import { CartService } from '../cart.service';
import { menu_products, Idish } from '../menu';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  dishes: Array<Idish> = menu_products;
  constructor(private cartservice: CartService){

  }
  addToCart(dish: Idish){
    alert("Added");
    this.cartservice.addToCart(dish);
  }
}
