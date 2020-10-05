import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthPinPageRoutingModule } from './auth-pin-routing.module';

import { AuthPinPage } from './auth-pin.page';
import { SharedModule } from '../../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    AuthPinPageRoutingModule,

    SharedModule
  ],
  declarations: [AuthPinPage]
})
export class AuthPinPageModule { }
