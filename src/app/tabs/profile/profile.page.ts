import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-profile',
  templateUrl: 'profile.page.html',
  styleUrls: ['profile.page.scss'],
})
export class ProfilePage implements OnInit {
  constructor(private menuController: MenuController) {}

  doRefresh(event) {
    setTimeout(() => {
      event.target.complete();
    }, 500);
  }

  toggleMenu() {
    this.menuController.toggle('profile');
  }

  ngOnInit(): void {}

  ionViewDidEnter() {
    this.menuController.enable(true, 'profile');
  }

  ionViewDidLeave() {
    this.menuController.enable(false, 'profile');
  }
}
