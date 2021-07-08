import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../../../shared/shared.module';
import { PrivacyPageRoutingModule } from './privacy-routing.module';

import { PrivacyPage } from './privacy.page';

@NgModule({
  imports: [CommonModule, PrivacyPageRoutingModule, SharedModule],
  declarations: [PrivacyPage],
})
export class PrivacyPageModule {}
