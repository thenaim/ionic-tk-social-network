import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MusicPage } from './music.page';

const routes: Routes = [
  {
    path: '',
    component: MusicPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MusicPageRoutingModule {}
