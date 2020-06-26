import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MessagePage } from './message.page';
import { MessagePageRoutingModule } from './message-routing.module';

import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    MessagePageRoutingModule,

    SharedModule
  ],
  declarations: [MessagePage]
})
export class MessagePageModule { }
