import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from '../add-product/add-product.component';
import { ListProductComponent } from '../list-product/list-product.component';
 
const routes: Routes = [ 
  {
    path:'',
    redirectTo:'add-product',
    pathMatch:'full'
  },
 
  {
     path:'add-product',
     component:AddProductComponent
  } ,
  {
    path:'add-product/:id',
    component:AddProductComponent
 } ,
  {
    path:'list-product',
    component:ListProductComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
