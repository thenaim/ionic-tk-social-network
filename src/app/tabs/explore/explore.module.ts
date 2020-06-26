import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExplorePage } from './explore.page';
import { ExplorePageRoutingModule } from './explore-routing.module';

import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    ExplorePageRoutingModule,

    SharedModule
  ],
  declarations: [ExplorePage]
})
export class ExplorePageModule { }
