import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../../../shared/shared.module';
import { BlockedPageRoutingModule } from './blocked-routing.module';

import { BlockedPage } from './blocked.page';

@NgModule({
  imports: [CommonModule, BlockedPageRoutingModule, SharedModule],
  declarations: [BlockedPage],
})
export class BlockedPageModule {}
