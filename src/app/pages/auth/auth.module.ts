import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthPageRoutingModule } from './auth-routing.module';
import { AuthPage } from './auth.page';

import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    AuthPageRoutingModule,

    SharedModule
  ],
  declarations: [AuthPage]
})
export class AuthPageModule { }
