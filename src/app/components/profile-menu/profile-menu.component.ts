import { Component, OnInit } from '@angular/core';
import { MenuController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-profile-menu',
  templateUrl: './profile-menu.component.html',
  styleUrls: ['./profile-menu.component.scss'],
})
export class ProfileMenuComponent implements OnInit {
  constructor(private navController: NavController, private menuController: MenuController) {}

  async openSettings() {
    await this.menuController.close('profile');
    await this.navController.navigateForward(['/tabs', 'profile', 'settings']);
  }

  ngOnInit() {}
}
