import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../../../shared/shared.module';
import { AuthPinPageRoutingModule } from './auth-pin-routing.module';

import { AuthPinPage } from './auth-pin.page';

@NgModule({
  imports: [CommonModule, AuthPinPageRoutingModule, SharedModule],
  declarations: [AuthPinPage],
})
export class AuthPinPageModule {}
