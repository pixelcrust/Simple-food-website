import { Component } from '@angular/core';
import { menu_products, Idish } from '../menu';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  dishes: Array<Idish> = menu_products;
}
