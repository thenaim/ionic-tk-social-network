import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../../../shared/shared.module';
import { BalancePageRoutingModule } from './balance-routing.module';

import { BalancePage } from './balance.page';

@NgModule({
  imports: [CommonModule, BalancePageRoutingModule, SharedModule],
  declarations: [BalancePage],
})
export class BalancePageModule {}
