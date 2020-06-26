import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewsPage } from './news.page';

const routes: Routes = [
  {
    path: '',
    component: NewsPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewsPageRoutingModule { }
