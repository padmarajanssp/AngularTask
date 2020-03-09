import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
const routes: Routes = [
  {
  path:'product&supplies',
  loadChildren:()=>import('./productandsupplier/productandsupplier.module').then(m=>m.ProductandsupplierModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
