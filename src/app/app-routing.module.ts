import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { appConfig } from './app.config';
import { AuthGuardAfterLoginService, AuthGuardBeforeLoginService } from './core/auth-guard/auth-guard.service';

const routes: Routes = [
  {
    path: '',
    redirectTo: appConfig.routes.tabs.root,
    pathMatch: 'full',
  },
  {
    path: appConfig.routes.tabs.root,
    loadChildren: () => import('./tabs/tabs.module').then((m) => m.TabsPageModule),
    canActivate: [AuthGuardAfterLoginService],
  },

  /* Auth routes */
  {
    path: appConfig.routes.auth.forgot,
    loadChildren: () => import('./pages/auth/forgot/forgot.module').then((m) => m.ForgotPageModule),
    canActivate: [AuthGuardBeforeLoginService],
  },
  {
    path: appConfig.routes.auth.login,
    loadChildren: () => import('./pages/auth/login/login.module').then((m) => m.LoginPageModule),
    canActivate: [AuthGuardBeforeLoginService],
  },
  {
    path: appConfig.routes.auth.register,
    loadChildren: () => import('./pages/auth/register/register.module').then((m) => m.RegisterPageModule),
    canActivate: [AuthGuardBeforeLoginService],
  },
  {
    path: appConfig.routes.auth.reset,
    loadChildren: () => import('./pages/auth/reset/reset.module').then((m) => m.ResetPageModule),
    canActivate: [AuthGuardBeforeLoginService],
  },

  /* Redirect routes */
  {
    path: 'error',
    redirectTo: appConfig.routes.redirectOnError,
  },
  {
    path: '**',
    redirectTo: appConfig.routes.redirectOnNotFound,
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
