import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TabsPageRoutingModule } from './tabs-routing.module';
import { TabsPage } from './tabs.page';

import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    TabsPageRoutingModule,

    SharedModule
  ],
  declarations: [TabsPage]
})
export class TabsPageModule { }
