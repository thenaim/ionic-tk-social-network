import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExplorePage } from './explore.page';

const routes: Routes = [
  {
    path: '',
    component: ExplorePage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExplorePageRoutingModule {}
