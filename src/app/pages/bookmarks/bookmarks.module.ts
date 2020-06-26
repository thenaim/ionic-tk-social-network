import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookmarksPageRoutingModule } from './bookmarks-routing.module';
import { BookmarksPage } from './bookmarks.page';

import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    BookmarksPageRoutingModule,

    SharedModule
  ],
  declarations: [BookmarksPage]
})
export class BookmarksPageModule { }
