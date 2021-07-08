import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../../shared/shared.module';
import { SettingsPageRoutingModule } from './settings-routing.module';

import { SettingsPage } from './settings.page';

@NgModule({
  imports: [CommonModule, SettingsPageRoutingModule, SharedModule],
  declarations: [SettingsPage],
})
export class SettingsPageModule {}
