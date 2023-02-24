import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { AboutComponent } from './about/about.component';
import { DetailsComponent } from './details/details.component';
import { CartComponent } from './cart/cart.component';

const routes: Routes = [{
  path:"", component: HomeComponent
},{
  path:"menu", component: MenuComponent
},{
  path:"about", component: AboutComponent
},{
  path:"cart", component: CartComponent
},{
  path:"dish/:id", component: DetailsComponent  //pfad
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
