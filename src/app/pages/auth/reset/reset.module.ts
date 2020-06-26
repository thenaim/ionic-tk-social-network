import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResetPageRoutingModule } from './reset-routing.module';
import { ResetPage } from './reset.page';

import { SharedModule } from '../../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    ResetPageRoutingModule,

    SharedModule
  ],
  declarations: [ResetPage]
})
export class ResetPageModule { }
