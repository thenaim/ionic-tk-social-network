import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../../../shared/shared.module';
import { AboutPageRoutingModule } from './about-routing.module';

import { AboutPage } from './about.page';

@NgModule({
  imports: [CommonModule, AboutPageRoutingModule, SharedModule],
  declarations: [AboutPage],
})
export class AboutPageModule {}
