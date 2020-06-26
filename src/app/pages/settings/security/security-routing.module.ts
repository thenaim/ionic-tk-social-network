import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SecurityPage } from './security.page';

const routes: Routes = [
  {
    path: '',
    component: SecurityPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SecurityPageRoutingModule {}
