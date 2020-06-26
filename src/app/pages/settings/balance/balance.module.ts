import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BalancePageRoutingModule } from './balance-routing.module';

import { BalancePage } from './balance.page';
import { SharedModule } from '../../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    BalancePageRoutingModule,

    SharedModule
  ],
  declarations: [BalancePage]
})
export class BalancePageModule {}
