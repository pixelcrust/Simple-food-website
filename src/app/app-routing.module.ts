import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { OrderComponent } from './order/order.component';
import { AboutComponent } from './about/about.component';
import { DetailsComponent } from './details/details.component';

const routes: Routes = [{
  path:"", component: HomeComponent
},{
  path:"menu", component: MenuComponent
},{
  path:"order", component: OrderComponent
},{
  path:"about", component: AboutComponent
},{
  path:":productID", component: DetailsComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
