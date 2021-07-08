import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthPinPage } from './auth-pin.page';

const routes: Routes = [
  {
    path: '',
    component: AuthPinPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthPinPageRoutingModule {}
