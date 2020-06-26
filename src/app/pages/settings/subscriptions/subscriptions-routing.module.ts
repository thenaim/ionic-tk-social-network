import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SubscriptionsPage } from './subscriptions.page';

const routes: Routes = [
  {
    path: '',
    component: SubscriptionsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SubscriptionsPageRoutingModule {}
