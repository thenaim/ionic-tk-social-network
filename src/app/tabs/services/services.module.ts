import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { UsersStoriesComponentModule } from '../../components/users-stories/users-stories.module';
import { UsersPostsComponentModule } from '../../components/users-posts/users-posts.module';
import { ServicesPage } from './services.page';
import { ServicesPageRoutingModule } from './services-routing.module';

@NgModule({
  imports: [
    CommonModule,
    ServicesPageRoutingModule,
    UsersStoriesComponentModule,
    UsersPostsComponentModule,
    SharedModule,
  ],
  declarations: [ServicesPage],
})
export class ServicesPageModule {}
