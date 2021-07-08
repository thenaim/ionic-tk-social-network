import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { appConfig } from './app.config';
import { AuthGuardAfterLoginService } from './core/auth-guard/auth-guard.service';

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
    path: 'auth',
    loadChildren: () => import('./pages/auth/auth.module').then((m) => m.AuthPageModule),
  },

  /* Other routes */

  {
    path: 'message-detail/:messageId',
    loadChildren: () => import('./pages/message-detail/message-detail.module').then((m) => m.MessageDetailPageModule),
    canActivate: [AuthGuardAfterLoginService],
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
