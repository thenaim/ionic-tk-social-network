import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FriendsPageRoutingModule } from './friends-routing.module';

import { FriendsPage } from './friends.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FriendsPageRoutingModule,

    SharedModule
  ],
  declarations: [FriendsPage]
})
export class FriendsPageModule { }
