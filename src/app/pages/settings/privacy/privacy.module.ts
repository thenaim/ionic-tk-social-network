import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrivacyPageRoutingModule } from './privacy-routing.module';

import { PrivacyPage } from './privacy.page';
import { SharedModule } from '../../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    PrivacyPageRoutingModule,

    SharedModule
  ],
  declarations: [PrivacyPage]
})
export class PrivacyPageModule { }
