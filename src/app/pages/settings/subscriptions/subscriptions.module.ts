import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../../../shared/shared.module';
import { SubscriptionsPageRoutingModule } from './subscriptions-routing.module';

import { SubscriptionsPage } from './subscriptions.page';

@NgModule({
  imports: [CommonModule, SubscriptionsPageRoutingModule, SharedModule],
  declarations: [SubscriptionsPage],
})
export class SubscriptionsPageModule {}
