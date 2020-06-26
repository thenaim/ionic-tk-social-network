import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ForgotPageRoutingModule } from './forgot-routing.module';
import { ForgotPage } from './forgot.page';

import { SharedModule } from '../../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    ForgotPageRoutingModule,

    SharedModule
  ],
  declarations: [ForgotPage]
})
export class ForgotPageModule { }
