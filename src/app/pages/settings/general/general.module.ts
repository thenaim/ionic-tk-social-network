import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GeneralPageRoutingModule } from './general-routing.module';

import { GeneralPage } from './general.page';
import { SharedModule } from '../../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    GeneralPageRoutingModule,

    SharedModule
  ],
  declarations: [GeneralPage]
})
export class GeneralPageModule { }
