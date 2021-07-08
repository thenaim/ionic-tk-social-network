import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { ProfileActions } from './profile.actions';
import { ProfileModel } from './profile.model';
import { selectUser, selectUserLoadingStates } from './profile.selectors';

@Component({
  selector: 'app-profile',
  templateUrl: 'profile.page.html',
  styleUrls: ['profile.page.scss'],
})
export class ProfilePage implements OnInit {
  @Select(selectUser()) user$: Observable<ProfileModel>;
  @Select(selectUserLoadingStates()) userLoadingStates$: Observable<{
    isLoading: boolean;
    isFailed: boolean;
    isSuccess: boolean;
  }>;

  constructor(private store: Store, private menuController: MenuController) {}

  doRefresh(event) {
    setTimeout(() => {
      event.target.complete();
    }, 500);
  }

  toggleMenu() {
    this.menuController.toggle('profile');
  }

  ngOnInit() {
    this.store.dispatch(new ProfileActions.FetchUser('1'));
  }

  ionViewDidEnter() {
    this.menuController.enable(true, 'profile');
  }

  ionViewDidLeave() {
    this.menuController.enable(false, 'profile');
  }
}
