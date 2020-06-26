import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginPageRoutingModule } from './login-routing.module';
import { LoginPage } from './login.page';

import { SharedModule } from '../../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    LoginPageRoutingModule,

    SharedModule
  ],
  declarations: [LoginPage]
})
export class LoginPageModule { }
