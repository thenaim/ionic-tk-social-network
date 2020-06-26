import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlockedPageRoutingModule } from './blocked-routing.module';

import { BlockedPage } from './blocked.page';
import { SharedModule } from '../../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    BlockedPageRoutingModule,

    SharedModule
  ],
  declarations: [BlockedPage]
})
export class BlockedPageModule { }
