import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../../../shared/shared.module';
import { AccountPageRoutingModule } from './account-routing.module';

import { AccountPage } from './account.page';

@NgModule({
  imports: [CommonModule, AccountPageRoutingModule, SharedModule],
  declarations: [AccountPage],
})
export class AccountPageModule {}
