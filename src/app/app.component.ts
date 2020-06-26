import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Platform, MenuController, LoadingController } from '@ionic/angular';

import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { Store, select } from '@ngrx/store';
import { selectTheme } from './shared/settings/settings.selectors';

import { TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs';
import { actionSettingsChangeTheme } from './shared/settings/settings.actions';
import { FakerService } from './shared/faker/faker.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  theme$: Observable<boolean>;
  isDarkTheme = false;

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private router: Router,
    private translate: TranslateService,

    private store: Store,

    private fakerService: FakerService,

    private menu: MenuController,
    public loadingController: LoadingController
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.translate.setDefaultLang('en');
    this.fakerService.setLang('en');
    this.theme$ = this.store.pipe(select(selectTheme));

    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  async goToSettings() {
    const loading = await this.loadingController.create();
    await loading.present().then(() => {
      this.menu.close().then(() => {
        this.router.navigateByUrl('/tabs/profile/settings').then(async () => {
          await loading.dismiss();
        });
      });
    });
  }

  closeCameraSide() {
    this.menu.close('camera');
  }

  // Add or remove the "dark" class
  toggleDarkTheme() {
    this.store.dispatch(actionSettingsChangeTheme({ isDark: !this.isDarkTheme }));
  }

  ngOnInit(): void {
    this.theme$.subscribe((isDark) => {
      this.isDarkTheme = isDark;
    });
  }
}
