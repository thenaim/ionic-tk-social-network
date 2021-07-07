import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MessageDetailPage } from './message-detail.page';

const routes: Routes = [
  {
    path: '',
    component: MessageDetailPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MessageDetailPageRoutingModule {}
