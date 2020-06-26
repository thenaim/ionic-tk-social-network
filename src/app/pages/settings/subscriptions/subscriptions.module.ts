import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SubscriptionsPageRoutingModule } from './subscriptions-routing.module';

import { SubscriptionsPage } from './subscriptions.page';
import { SharedModule } from '../../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SubscriptionsPageRoutingModule,

    SharedModule
  ],
  declarations: [SubscriptionsPage]
})
export class SubscriptionsPageModule { }
