import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegisterPageRoutingModule } from './register-routing.module';
import { RegisterPage } from './register.page';

import { SharedModule } from '../../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    RegisterPageRoutingModule,

    SharedModule
  ],
  declarations: [RegisterPage]
})
export class RegisterPageModule { }
