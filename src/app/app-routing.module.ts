import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { authGuard } from './Guard/auth.guard';


const routes: Routes = [


{
  path:'product',
  loadChildren:()=>import('./product-details/product/product.module').then(m=>m.ProductModule)
  
},
{
  path:'',
  pathMatch:'full',
  redirectTo:'product',

},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
