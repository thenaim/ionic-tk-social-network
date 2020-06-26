import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NotificationPage } from './notification.page';
import { NotificationPageRoutingModule } from './notification-routing.module';

import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    NotificationPageRoutingModule,

    SharedModule
  ],
  declarations: [NotificationPage]
})
export class NotificationPageModule { }
