import { AngularMaterialModule } from './../app/angula-material.module';
import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import LayoutModule from './layout/LayoutModule';
import { SharedModule } from './shared/SharedModule';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';

const COMPONENTS = [
  HomeComponent,
  LoginComponent,
  RegisterComponent,
  ProductListComponent,
  ProductDetailComponent
];

@NgModule({
  declarations: [...COMPONENTS],
  imports: [RouterModule, BrowserModule, LayoutModule, AngularMaterialModule, SharedModule],
  exports: [...COMPONENTS, LayoutModule],
})
export default class ComponentModule { }
