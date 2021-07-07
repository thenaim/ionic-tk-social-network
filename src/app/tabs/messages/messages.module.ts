import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { UsersStoriesComponentModule } from '../../components/users-stories/users-stories.module';
import { UsersPostsComponentModule } from '../../components/users-posts/users-posts.module';
import { MessagesPage } from './messages.page';
import { MessagesPageRoutingModule } from './messages-routing.module';

@NgModule({
  imports: [
    CommonModule,
    MessagesPageRoutingModule,
    UsersStoriesComponentModule,
    UsersPostsComponentModule,
    SharedModule,
  ],
  declarations: [MessagesPage],
})
export class MessagesPageModule {}
