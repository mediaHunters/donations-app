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
import { AuthGuard } from './auth.guard';
import { NotFoundComponent } from './components/not-found/not-found.component';

const routes: Routes = [
  { path: '', redirectTo: '/search', pathMatch: 'full' },
  {
    path: 'login', component: LoginComponent, canActivate: [AuthGuard]
  },
  {
    path: 'register', component: RegisterComponent, canActivate: [AuthGuard]
  },
  {
    path: 'search', component: HomeComponent, canActivate: [AuthGuard]
  },
  {
    path: 'products', component: ProductListComponent, canActivate: [AuthGuard]
  },
  {
    path: 'products-no-subscription', component: ProductListNoSubscriptionComponent, canActivate: [AuthGuard]
  },
  {
    path: 'products-no-account', component: ProductListNoAccountComponent, canActivate: [AuthGuard]
  },
  {
    path: 'product-detail', component: ProductDetailComponent, canActivate: [AuthGuard]
  },
  {
    path: 'faq', component: FaqComponent, canActivate: [AuthGuard]
  },
  {
    path: 'bookmarks', component: BookmarksComponent, canActivate: [AuthGuard]
  },
  {
    path: 'user-settings', component: UserSettingsComponent, canActivate: [AuthGuard]
  },
  {
    path: 'subscriptions', component: SubscriptionsComponent, canActivate: [AuthGuard]
  },
  {
    path: 'subscriptions-no', component: SubscriptionsNoComponent, canActivate: [AuthGuard]
  },
  {
    path: 'credit-card', component: CreditCardComponent, canActivate: [AuthGuard]
  },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
