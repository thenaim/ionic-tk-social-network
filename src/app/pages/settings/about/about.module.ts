import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutPageRoutingModule } from './about-routing.module';

import { AboutPage } from './about.page';
import { SharedModule } from '../../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    AboutPageRoutingModule,

    SharedModule
  ],
  declarations: [AboutPage]
})
export class AboutPageModule { }
