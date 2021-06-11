import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { UsersStoriesComponentModule } from '../../components/users-stories/users-stories.module';
import { UsersPostsComponentModule } from '../../components/users-posts/users-posts.module';
import { MainPage } from './main.page';
import { MainPageRoutingModule } from './main-routing.module';

@NgModule({
  imports: [CommonModule, MainPageRoutingModule, UsersStoriesComponentModule, UsersPostsComponentModule, SharedModule],
  declarations: [MainPage],
})
export class MainPageModule {}
