import { Component, OnInit } from '@angular/core';
import { MenuController, NavController } from '@ionic/angular';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { ProfileModel } from '../../tabs/profile/profile.model';
import { selectUser } from '../../tabs/profile/profile.selectors';

@Component({
  selector: 'app-profile-menu',
  templateUrl: './profile-menu.component.html',
  styleUrls: ['./profile-menu.component.scss'],
})
export class ProfileMenuComponent implements OnInit {
  @Select(selectUser()) user$: Observable<ProfileModel>;
  constructor(private navController: NavController, private menuController: MenuController) {}

  async openSettings() {
    await this.menuController.close('profile');
    await this.navController.navigateForward(['/tabs', 'profile', 'settings']);
  }

  ngOnInit() {}
}
