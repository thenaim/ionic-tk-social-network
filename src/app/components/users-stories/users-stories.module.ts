import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { SharedModule } from '../../shared/shared.module';
import { UsersStoriesComponent } from './users-stories.component';

@NgModule({
  imports: [CommonModule, IonicModule, SharedModule],
  declarations: [UsersStoriesComponent],
  exports: [UsersStoriesComponent],
})
export class UsersStoriesComponentModule {}
