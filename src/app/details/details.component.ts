import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { menu_products, Idish } from '../menu';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit{
  dish: Idish = {} as Idish;
  id: number = 0;

  constructor(private route:ActivatedRoute){
  }
  ngOnInit(): void {
    this.route.params.subscribe((params: Params)=>{
      this.id = +params['id'];
      this.dish = menu_products[this.id];
    })
  }
}
