import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SettingsPageRoutingModule } from './settings-routing.module';

import { SettingsPage } from './settings.page';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SettingsPageRoutingModule,

    SharedModule
  ],
  declarations: [SettingsPage]
})
export class SettingsPageModule { }
