import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {
  settings: any[] = [
    { id: 'notifications', icon: 'notifications-outline', link: 'notifications' },
    { id: 'account', icon: 'person-outline', link: 'account' },
    { id: 'appearance', icon: 'color-palette-outline', link: 'appearance' },
    { id: 'general', icon: 'settings-outline', link: 'general' },
    { id: 'security', icon: 'lock-closed-outline', link: 'security' },
    { id: 'privacy', icon: 'hand-left-outline', link: 'privacy' },
    { id: 'blocked', icon: 'people-outline', link: 'blocked' },
    { id: 'balance', icon: 'wallet-outline', link: 'balance' },
    { id: 'subscriptions', icon: 'card-outline', link: 'subscriptions' },
    { id: 'about', icon: 'help-circle-outline', link: 'about' },
  ];

  constructor() {}

  ngOnInit() {}
}
