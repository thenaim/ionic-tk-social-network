import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../../shared/shared.module';
import { ProfilePage } from './profile.page';
import { ProfilePageRoutingModule } from './profile-routing.module';

@NgModule({
  imports: [CommonModule, ProfilePageRoutingModule, SharedModule],
  declarations: [ProfilePage],
})
export class ProfilePageModule {}
