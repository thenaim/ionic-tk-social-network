import { Component, OnInit } from '@angular/core';
import { MenuController, NavController } from '@ionic/angular';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { AppStoreModel } from '../../core/store';
import { SettingsUpdateTheme } from '../../pages/settings/settings.actions';
import { ProfileModel } from '../../tabs/profile/profile.model';
import { selectUser } from '../../tabs/profile/profile.selectors';

@Component({
  selector: 'app-profile-menu',
  templateUrl: './profile-menu.component.html',
  styleUrls: ['./profile-menu.component.scss'],
})
export class ProfileMenuComponent implements OnInit {
  @Select(selectUser()) user$: Observable<ProfileModel>;
  constructor(private store: Store, private navController: NavController, private menuController: MenuController) {}

  async openSettings() {
    await this.menuController.close('profile');
    await this.navController.navigateForward(['/tabs', 'profile', 'settings']);
  }

  toggleTheme() {
    const isDarkMode = this.store.selectSnapshot<boolean>(
      (state: AppStoreModel) => state.settings.appearance.isDarkMode,
    );
    this.store.dispatch(new SettingsUpdateTheme(!isDarkMode));
  }

  ngOnInit() {}
}
