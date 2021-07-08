import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SettingsPage } from './settings.page';

const routes: Routes = [
  {
    path: '',
    component: SettingsPage,
  },
  {
    path: 'notifications',
    loadChildren: () => import('./notifications/notifications.module').then((m) => m.NotificationsPageModule),
  },
  {
    path: 'account',
    loadChildren: () => import('./account/account.module').then((m) => m.AccountPageModule),
  },
  {
    path: 'appearance',
    loadChildren: () => import('./appearance/appearance.module').then((m) => m.AppearancePageModule),
  },
  {
    path: 'general',
    loadChildren: () => import('./general/general.module').then((m) => m.GeneralPageModule),
  },
  {
    path: 'security',
    loadChildren: () => import('./security/security.module').then((m) => m.SecurityPageModule),
  },
  {
    path: 'privacy',
    loadChildren: () => import('./privacy/privacy.module').then((m) => m.PrivacyPageModule),
  },
  {
    path: 'blocked',
    loadChildren: () => import('./blocked/blocked.module').then((m) => m.BlockedPageModule),
  },
  {
    path: 'balance',
    loadChildren: () => import('./balance/balance.module').then((m) => m.BalancePageModule),
  },
  {
    path: 'subscriptions',
    loadChildren: () => import('./subscriptions/subscriptions.module').then((m) => m.SubscriptionsPageModule),
  },
  {
    path: 'about',
    loadChildren: () => import('./about/about.module').then((m) => m.AboutPageModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SettingsPageRoutingModule {}
