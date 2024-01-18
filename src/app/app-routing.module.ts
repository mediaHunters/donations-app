import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../components/home/home.component';
import { LoginComponent } from '../components/login/login.component';
import { RegisterComponent } from '../components/register/register.component';
import { ProductListComponent } from '../components/product-list/product-list.component';
import { ProductDetailComponent } from '../components/product-detail/product-detail.component';
import { FaqComponent } from '../components/faq/faq.component';
import { BookmarksComponent } from '../components/bookmarks/bookmarks.component';
import { UserSettingsComponent } from '../components/account/user-settings/user-settings.component';
import { SubscriptionsComponent } from '../components/account/subscriptions/subscriptions.component';
import { CreditCardComponent } from '../components/account/credit-card/credit-card.component';

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
    path: 'credit-card',component: CreditCardComponent
  },
  { path: '**', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
