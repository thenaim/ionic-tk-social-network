import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppearancePageRoutingModule } from './appearance-routing.module';

import { AppearancePage } from './appearance.page';
import { SharedModule } from '../../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    AppearancePageRoutingModule,

    SharedModule
  ],
  declarations: [AppearancePage]
})
export class AppearancePageModule { }
