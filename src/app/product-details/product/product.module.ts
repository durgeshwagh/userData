import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductRoutingModule } from './product-routing.module';
import { ButtonModule } from 'primeng/button';
import { AddProductComponent } from '../add-product/add-product.component';
import { ListProductComponent } from '../list-product/list-product.component';
import { TableModule } from 'primeng/table';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule , ReactiveFormsModule } from '@angular/forms';
import { ToolbarModule } from 'primeng/toolbar';
import { ChartModule } from 'primeng/chart';

@NgModule({
  declarations: [
    AddProductComponent,
    ListProductComponent
    ],
  imports: [
    ChartModule,
    ToolbarModule,
    ReactiveFormsModule,
    FormsModule,
    InputTextModule,
    FloatLabelModule,
    TableModule,
    ButtonModule,
    CommonModule,
    ProductRoutingModule
  ]
})
export class ProductModule { }
