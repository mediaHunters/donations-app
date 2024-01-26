import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreditCardComponent } from './components/account/credit-card/credit-card.component';
import { SubscriptionsComponent } from './components/account/subscriptions/subscriptions.component';
import { UserSettingsComponent } from './components/account/user-settings/user-settings.component';
import { BookmarksComponent } from './components/bookmarks/bookmarks.component';
import { FaqComponent } from './components/faq/faq.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { RegisterComponent } from './components/register/register.component';
import { ProductListNoSubscriptionComponent } from './components/product-list-no-subscription/product-list-no-subscription.component';
import { SubscriptionsNoComponent } from './components/account/subscriptions-no/subscriptions-no.component';
import { ProductListNoAccountComponent } from './components/product-list-no-account/product-list-no-account.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'register', component: RegisterComponent
  },
  {
    path: 'products', component: ProductListComponent
  },
  {
    path: 'products-no-subscription', component: ProductListNoSubscriptionComponent
  },
  {
    path: 'products-no-account', component: ProductListNoAccountComponent
  },
  {
    path: 'product-detail', component: ProductDetailComponent
  },
  {
    path: 'faq',component: FaqComponent
  },
  {
    path: 'bookmarks', component: BookmarksComponent
  },
  {
    path: 'user-settings',component: UserSettingsComponent
  },
  {
    path: 'subscriptions',component: SubscriptionsComponent
  },
  {
    path: 'subscriptions-no',component: SubscriptionsNoComponent
  },
  {
    path: 'credit-card',component: CreditCardComponent
  },
  { path: '**', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
