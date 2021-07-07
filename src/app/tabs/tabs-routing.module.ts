import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'main',
        children: [
          {
            path: '',
            loadChildren: () => import('./main/main.module').then((m) => m.MainPageModule),
          },
        ],
      },
      {
        path: 'services',
        children: [
          {
            path: '',
            loadChildren: () => import('./services/services.module').then((m) => m.ServicesPageModule),
          },
        ],
      },
      {
        path: 'messages',
        children: [
          {
            path: '',
            loadChildren: () => import('./messages/messages.module').then((m) => m.MessagesPageModule),
          },
          {
            path: 'detail/:messageId',
            loadChildren: () =>
              import('../pages/message-detail/message-detail.module').then((m) => m.MessageDetailPageModule),
          },
        ],
      },
      {
        path: '',
        redirectTo: '/tabs/main',
        pathMatch: 'full',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
