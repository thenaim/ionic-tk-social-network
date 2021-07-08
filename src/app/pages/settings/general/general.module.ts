import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../../../shared/shared.module';
import { GeneralPageRoutingModule } from './general-routing.module';

import { GeneralPage } from './general.page';

@NgModule({
  imports: [CommonModule, GeneralPageRoutingModule, SharedModule],
  declarations: [GeneralPage],
})
export class GeneralPageModule {}
