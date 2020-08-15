import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      // Tab 1
      {
        path: 'news',
        children: [
          {
            path: '',
            loadChildren: () => import('./news/news.module').then(m => m.NewsPageModule)
          },
          {
            path: 'settings',
            loadChildren: () => import('../pages/settings/settings.module').then(m => m.SettingsPageModule)
          }
        ]
      },
      // Tab 2
      {
        path: 'explore',
        children: [
          {
            path: '',
            loadChildren: () => import('./explore/explore.module').then(m => m.ExplorePageModule)
          },
          {
            path: 'music',
            loadChildren: () => import('../pages/music/music.module').then(m => m.MusicPageModule)
          },
          {
            path: 'friends',
            loadChildren: () => import('../pages/friends/friends.module').then(m => m.FriendsPageModule)
          }
        ]
      },
      // Tab 3
      {
        path: 'messages',
        children: [
          {
            path: '',
            loadChildren: () => import('./message/message.module').then(m => m.MessagePageModule)
          }
        ]
      },
      // Tab 4
      {
        path: 'notifications',
        children: [
          {
            path: '',
            loadChildren: () => import('./notification/notification.module').then(m => m.NotificationPageModule)
          }
        ]
      },
      // Tab 5
      {
        path: 'profile',
        children: [
          {
            path: '',
            loadChildren: () => import('./profile/profile.module').then(m => m.ProfilePageModule)
          },
          {
            path: 'settings',
            loadChildren: () => import('../pages/settings/settings.module').then(m => m.SettingsPageModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: 'news',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/news',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule { }
