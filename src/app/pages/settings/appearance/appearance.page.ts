import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, Subscription } from 'rxjs';

import { Store, select } from '@ngrx/store';
import { selectTheme } from '../../../shared/ngrx/settings/settings.selectors';
import { actionSettingsChangeTheme } from '../../../shared/ngrx/settings/settings.actions';

@Component({
  selector: 'app-appearance',
  templateUrl: './appearance.page.html',
  styleUrls: ['./appearance.page.scss'],
})
export class AppearancePage implements OnInit {
  isDark: FormControl = new FormControl(false);

  theme$: Observable<boolean>;
  subscriptions: Subscription = new Subscription();

  constructor(
    private store: Store
  ) { }

  ngOnInit() {
    this.theme$ = this.store.pipe(select(selectTheme));
    this.subscriptions.add(
      this.theme$.subscribe((isDark) => {
        this.isDark.setValue(isDark);
        console.log('Appearance');
      })
    );

    this.subscriptions.add(
      this.isDark.valueChanges.subscribe((res) => {
        this.store.dispatch(actionSettingsChangeTheme({ isDark: res }));
      })
    );
  }

  ionViewDidLeave() {
    this.subscriptions.unsubscribe();
  }
}
