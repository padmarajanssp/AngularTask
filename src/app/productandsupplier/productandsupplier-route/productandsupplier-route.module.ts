import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ProductandsupplierformComponent } from '../productandsupplierform/productandsupplierform.component';
export const route:Routes=[
  {
    path:'',
    component:ProductandsupplierformComponent
  }
]
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(route)
  ],
  exports:[RouterModule]
})
export class ProductandsupplierRouteModule { }
