import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BalancePage } from './balance.page';

const routes: Routes = [
  {
    path: '',
    component: BalancePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BalancePageRoutingModule {}
