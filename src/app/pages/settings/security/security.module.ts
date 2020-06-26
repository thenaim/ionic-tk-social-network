import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SecurityPageRoutingModule } from './security-routing.module';

import { SecurityPage } from './security.page';
import { SharedModule } from '../../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SecurityPageRoutingModule,

    SharedModule
  ],
  declarations: [SecurityPage]
})
export class SecurityPageModule { }
