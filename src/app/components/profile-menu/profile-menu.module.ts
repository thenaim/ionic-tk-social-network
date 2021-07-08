import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { SharedModule } from '../../shared/shared.module';
import { ProfileMenuComponent } from './profile-menu.component';

@NgModule({
  imports: [CommonModule, IonicModule, SharedModule],
  declarations: [ProfileMenuComponent],
  exports: [ProfileMenuComponent],
})
export class ProfileMenuComponentModule {}
