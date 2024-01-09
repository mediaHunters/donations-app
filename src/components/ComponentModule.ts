import { AngularMaterialModule } from './../app/angula-material.module';
import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import LayoutModule from './layout/LayoutModule';
import { SharedModule } from './shared/SharedModule';

const COMPONENTS = [
  HomeComponent,
];

@NgModule({
  declarations: [...COMPONENTS],
  imports: [RouterModule, BrowserModule, LayoutModule, AngularMaterialModule, SharedModule],
  exports: [...COMPONENTS, LayoutModule],
})
export default class ComponentModule {}
