import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SignInComponent } from '../components/sign-in/sign-in.component';
import { CustomerFormComponent } from '../components/customer-form/customer-form.component';
 import { ForgetPasswordComponent } from '../components/forget-password/forget-password.component';
 import { PageNotFoundComponent } from '../components/page-not-found/page-not-found.component';
import { AddNewUserComponent } from '../components/admin-panel/user/add-new-user/add-new-user.component';
import { UserComponent } from '../components/admin-panel/user/user.component';
import { AdminPanelComponent } from '../components/admin-panel/admin-panel.component';
import { AddNewUser } from '../model/addnewUser';
import { AdminDashboardComponent } from '../components/admin-panel/admin-dashboard/admin-dashboard.component';
import { ResetPasswordComponent } from '../components/reset-password/reset-password.component';
import { HomeComponent } from '../components/start/home/home.component';
import { AuthGuard } from '../auth.guard';
import { ChomeComponent } from '../components/customer/chome/chome.component';
import { CartComponent } from '../components/customer/cart/cart.component';

const routes: Routes = [
  {
    path: '', redirectTo: '/home', pathMatch: 'full'
  },

  {
    path:'home',
    component:HomeComponent

  },

  {
    path: 'login',
    component: SignInComponent
  },
  {
    path: 'createCustomer',
    component: CustomerFormComponent
  },
  {
    path: 'forgetPassword',
    component: ForgetPasswordComponent
  },
 
  {
    path:'adminDashboard',
    component:AdminDashboardComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'customer',
    component:ChomeComponent,
    canActivate:[AuthGuard]
  },

  {
    path:'reset/:token',
    component:ResetPasswordComponent
  },
  {
    path:'cart',
    component:CartComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
  RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }