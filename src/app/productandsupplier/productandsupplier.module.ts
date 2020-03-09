import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductandsupplierformComponent } from './productandsupplierform/productandsupplierform.component';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import {ProductandsupplierRouteModule} from './productandsupplier-route/productandsupplier-route.module';
import { RouterModule } from '@angular/router';
import {MatSelectModule} from '@angular/material';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule,MatInputModule} from '@angular/material';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
@NgModule({
  declarations: [ProductandsupplierformComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    ProductandsupplierRouteModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,
    Ng2SearchPipeModule,
    MatAutocompleteModule
  ]
})
export class ProductandsupplierModule { }
