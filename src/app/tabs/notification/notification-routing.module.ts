import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotificationPage } from './notification.page';

const routes: Routes = [
  {
    path: '',
    component: NotificationPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NotificationPageRoutingModule {}
