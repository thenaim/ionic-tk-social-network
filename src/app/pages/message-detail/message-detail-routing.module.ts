import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MessageDetailPage } from './message-detail.page';

const routes: Routes = [
  {
    path: ':id',
    component: MessageDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MessageDetailPageRoutingModule {}
