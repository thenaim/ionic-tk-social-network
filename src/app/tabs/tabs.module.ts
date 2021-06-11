import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { TabsPage } from './tabs.page';
import { TabsPageRoutingModule } from './tabs-routing.module';

@NgModule({
  imports: [CommonModule, TabsPageRoutingModule, SharedModule],
  declarations: [TabsPage],
})
export class TabsPageModule {}
