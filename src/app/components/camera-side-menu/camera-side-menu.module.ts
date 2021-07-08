import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { SharedModule } from '../../shared/shared.module';
import { CameraSideMenuComponent } from './camera-side-menu.component';

@NgModule({
  imports: [CommonModule, IonicModule, SharedModule],
  declarations: [CameraSideMenuComponent],
  exports: [CameraSideMenuComponent],
})
export class CameraSideMenuComponentModule {}
