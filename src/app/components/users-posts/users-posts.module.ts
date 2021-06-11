import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { SharedModule } from '../../shared/shared.module';
import { UsersPostsComponent } from './users-posts.component';

@NgModule({
  imports: [CommonModule, IonicModule, SharedModule],
  declarations: [UsersPostsComponent],
  exports: [UsersPostsComponent],
})
export class UsersPostsComponentModule {}
