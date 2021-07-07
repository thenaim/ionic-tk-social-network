import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { UsersStoriesComponentModule } from '../../components/users-stories/users-stories.module';
import { UsersPostsComponentModule } from '../../components/users-posts/users-posts.module';
import { MessageDetailPage } from './message-detail.page';
import { MessageDetailPageRoutingModule } from './message-detail-routing.module';
import { MessagesDetailFooterComponent } from './components/footer/footer.component';
import { UserMessageComponent } from './components/user-message/user-message.component';
import { MyMessageComponent } from './components/my-message/my-message.component';
import { MessageDividerComponent } from './components/message-divider/message-divider.component';

@NgModule({
  imports: [
    CommonModule,
    MessageDetailPageRoutingModule,
    UsersStoriesComponentModule,
    UsersPostsComponentModule,
    SharedModule,
  ],
  declarations: [
    MessageDetailPage,
    MessagesDetailFooterComponent,
    UserMessageComponent,
    MyMessageComponent,
    MessageDividerComponent,
  ],
})
export class MessageDetailPageModule {}
