import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthPage } from './auth.page';

const routes: Routes = [
  {
    path: '',
    component: AuthPage,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'login',
      },
      {
        path: 'login',
        loadChildren: () => import('./login/login.module').then((m) => m.LoginPageModule),
      },
      {
        path: 'register',
        loadChildren: () => import('./register/register.module').then((m) => m.RegisterPageModule),
      },
      {
        path: 'forgot',
        loadChildren: () => import('./forgot/forgot.module').then((m) => m.ForgotPageModule),
      },
      {
        path: 'reset',
        loadChildren: () => import('./reset/reset.module').then((m) => m.ResetPageModule),
      },
      {
        path: 'pin',
        loadChildren: () => import('./auth-pin/auth-pin.module').then((m) => m.AuthPinPageModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthPageRoutingModule {}
