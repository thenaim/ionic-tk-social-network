import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Select, Store } from '@ngxs/store';
import { Observable, Subscription } from 'rxjs';
import { SettingsUpdateTheme } from '../settings.actions';
import { selectIsDarkMode } from '../settings.selectors';

@Component({
  selector: 'app-appearance',
  templateUrl: './appearance.page.html',
  styleUrls: ['./appearance.page.scss'],
})
export class AppearancePage implements OnInit {
  @Select(selectIsDarkMode()) isDarkMode$: Observable<boolean>;
  isDark: FormControl = new FormControl(false);

  theme$: Observable<boolean>;
  subscriptions: Subscription = new Subscription();

  constructor(private store: Store) {}

  onChangeTheme(event) {
    this.store.dispatch(new SettingsUpdateTheme(event.detail.value));
  }

  ngOnInit() {}

  ionViewDidLeave() {
    this.subscriptions.unsubscribe();
  }
}
