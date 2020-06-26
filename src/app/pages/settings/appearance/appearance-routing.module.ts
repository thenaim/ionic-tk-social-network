import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppearancePage } from './appearance.page';

const routes: Routes = [
  {
    path: '',
    component: AppearancePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AppearancePageRoutingModule {}
