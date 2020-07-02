import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MusicPageRoutingModule } from './music-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';

import { MusicPage } from './music.page';

@NgModule({
  imports: [
    CommonModule,
    MusicPageRoutingModule,

    SharedModule
  ],
  declarations: [MusicPage]
})
export class MusicPageModule { }
