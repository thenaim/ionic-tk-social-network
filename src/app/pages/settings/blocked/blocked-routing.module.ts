import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BlockedPage } from './blocked.page';

const routes: Routes = [
  {
    path: '',
    component: BlockedPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BlockedPageRoutingModule {}
