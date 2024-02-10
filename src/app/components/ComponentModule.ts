import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { SharedModule } from './shared/SharedModule';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { FaqComponent } from './faq/faq.component';
import { BookmarksComponent } from './bookmarks/bookmarks.component';
import { UserSettingsComponent } from './account/user-settings/user-settings.component';
import { SubscriptionsComponent } from './account/subscriptions/subscriptions.component';
import { CreditCardComponent } from './account/credit-card/credit-card.component';
import { AngularMaterialModule } from '../angula-material.module';
import LayoutModule from './layout/LayoutModule';
import { ProductListNoSubscriptionComponent } from './product-list-no-subscription/product-list-no-subscription.component';
import { SubscriptionsNoComponent } from './account/subscriptions-no/subscriptions-no.component';
import { ProductListNoAccountComponent } from './product-list-no-account/product-list-no-account.component';
import { NgxMasonryModule } from 'ngx-masonry';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
const COMPONENTS = [
  HomeComponent,
  LoginComponent,
  RegisterComponent,
  ProductListComponent,
  ProductListNoSubscriptionComponent,
  ProductListNoAccountComponent,
  ProductDetailComponent,
  FaqComponent,
  BookmarksComponent,
  UserSettingsComponent,
  SubscriptionsComponent,
  SubscriptionsNoComponent,
  CreditCardComponent
];

@NgModule({
  declarations: [...COMPONENTS],
  imports: [RouterModule, BrowserModule, LayoutModule, AngularMaterialModule, SharedModule,NgxMasonryModule,HttpClientModule, FormsModule, ReactiveFormsModule],
  exports: [...COMPONENTS, LayoutModule],
})
export default class ComponentModule { }
