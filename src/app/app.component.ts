import { AfterViewInit, Component } from '@angular/core';
import { App } from '@capacitor/app';
import { SplashScreen } from '@capacitor/splash-screen';
import { Platform } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { Store } from '@ngxs/store';
import { selectIsDarkMode } from './pages/settings/settings.selectors';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements AfterViewInit {
  constructor(private store: Store, private platform: Platform, private translateService: TranslateService) {
    this.setupThemeListner();
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.setupBackButtonListner();
    });
  }

  setupThemeListner() {
    this.store.select(selectIsDarkMode()).subscribe((isDarkMode: boolean) => {
      if (isDarkMode) {
        document.body.setAttribute('app-theme', 'dark');
      } else {
        document.body.removeAttribute('app-theme');
      }
    });
  }

  setupBackButtonListner() {
    App.addListener('backButton', (data) => {
      if (!data.canGoBack) {
        App.exitApp();
      }
    });
  }

  ngAfterViewInit() {
    this.platform.ready().finally(() => {
      setTimeout(() => SplashScreen.hide());
    });
  }
}
