import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Platform, MenuController, LoadingController } from '@ionic/angular';

import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { CameraPreview, CameraPreviewOptions, CameraPreviewPictureOptions } from '@ionic-native/camera-preview/ngx';
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';

import { Store, select } from '@ngrx/store';
import { selectTheme } from './shared/ngrx/settings/settings.selectors';

import { TranslateService } from '@ngx-translate/core';
import { Observable, Subscription, SubscriptionLike } from 'rxjs';
import { actionSettingsChangeTheme } from './shared/ngrx/settings/settings.actions';
import { FakerService } from './services/faker/faker.service';
import { AppEventsService } from './services/app-events/app-events.service';
import { map, take } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  theme$: Observable<boolean>;
  isCameraStart = false;
  isCameraFront = false;
  isCameraFlashMode = true;
  cameraFocusPosition = {
    top: 0,
    left: 0,
    show: false
  };

  cameraPreviewOpts: CameraPreviewOptions = {
    x: 0,
    y: 0,
    width: window.screen.width,
    height: window.screen.height,
    camera: 'rear',
    tapPhoto: false,
    tapFocus: false,
    previewDrag: false,
    toBack: true,
    alpha: 1
  };

  pictureOpts: CameraPreviewPictureOptions = {
    width: 1280,
    height: 1280,
    quality: 50
  };

  private subscriptions: SubscriptionLike[] = [];
  private orientationSubscription: Subscription;
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private cameraPreview: CameraPreview,
    private screenOrientation: ScreenOrientation,

    private router: Router,
    private translate: TranslateService,

    private store: Store,

    private fakerService: FakerService,

    private appEvents: AppEventsService,
    private menu: MenuController,
    public loadingController: LoadingController
  ) {
    this.initializeApp();
  }

  /**
  * App init
  */
  initializeApp() {
    this.translate.setDefaultLang('ru');
    this.fakerService.setLang('ru');
    this.theme$ = this.store.pipe(select(selectTheme));

    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.screenOrientation.unlock();
    });
  }

  /**
  * Theme toggle
  */
  async toggleDarkTheme() {
    const isDark = await this.store.pipe(select(selectTheme), take(1)).toPromise();
    this.store.dispatch(actionSettingsChangeTheme({ isDark: !isDark }));
  }

  /**
  * Navigate to settings page
  */
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

  /**
   * Close camera side
   */
  closeCameraSide(event: Event) {
    event.stopPropagation();
    event.preventDefault();

    this.menu.close('camera').then(() => {
      this.statusBar.hide();
    });
  }

  /**
   * On open camera side
   */
  onOpenCameraMenu(event) {
    this.isCameraStart = true;
    this.cameraPreviewOpts = { ...this.cameraPreviewOpts, camera: 'rear', width: window.screen.width, height: window.screen.height };

    this.cameraPreview.startCamera(this.cameraPreviewOpts).then(async (res) => {
      await this.cameraPreview.setFlashMode(this.isCameraFlashMode ? this.cameraPreview.FLASH_MODE.ON : this.cameraPreview.FLASH_MODE.OFF);
      this.statusBar.hide();
    },
      (err) => {
        console.log(err);
      });

    /**
     * Subscribe to orientation change
     */
    this.orientationSubscription = this.screenOrientation.onChange().subscribe(async () => {
      await this.cameraPreview.stopCamera();
      this.cameraPreviewOpts = { ...this.cameraPreviewOpts, width: window.screen.width, height: window.screen.height };

      this.cameraPreview.startCamera(this.cameraPreviewOpts).then(async (res) => {
        await this.cameraPreview.setFlashMode(
            this.isCameraFlashMode
                ? this.cameraPreview.FLASH_MODE.ON
                : this.cameraPreview.FLASH_MODE.OFF
        );
        console.log(res);
      },
        (err) => {
          console.log(err);
        });
    });
  }

  /**
   * On close camera side
   */
  onCloseCameraMenu(event) {
    this.isCameraStart = false;
    this.cameraPreview.stopCamera();
    this.orientationSubscription.unsubscribe();
    this.statusBar.show();
  }

  /**
   * Switch camera mode
   * rear/front
   */
  switchCamera(event: Event) {
    event.stopPropagation();
    event.preventDefault();

    console.log('switchCamera');
    this.cameraPreview.switchCamera().then(async () => {
      this.isCameraFront = !this.isCameraFront;
      if (!this.isCameraFront) {
        await this.cameraPreview.setFlashMode(
            this.isCameraFlashMode
                ? this.cameraPreview.FLASH_MODE.ON
                : this.cameraPreview.FLASH_MODE.OFF
        );
      }
    });
  }

  /**
   * Take picture camera
   */
  takePicture(event: Event) {
    event.stopPropagation();
    event.preventDefault();

    console.log('takePicture');
    // take a picture
    this.cameraPreview.takePicture(this.pictureOpts).then((imageData) => {
      const img = 'data:image/jpeg;base64,' + imageData;
      // console.log(img);
    }, (err) => {
      console.log(err);
    });
  }

  /**
   * Switch flash mode
   * ON/OFF
   */
  switchFlashMode(event: Event) {
    event.stopPropagation();
    event.preventDefault();

    console.log('switchFlashMode');
    this.isCameraFlashMode = !this.isCameraFlashMode;
    this.cameraPreview.setFlashMode(this.isCameraFlashMode ? this.cameraPreview.FLASH_MODE.ON : this.cameraPreview.FLASH_MODE.OFF);
  }

  /**
   * Focus camera on click area
   */
  async getCameraFocusCoordinates(event) {
    this.cameraFocusPosition.top = event.y - 15;
    this.cameraFocusPosition.left = event.x - 15;

    // start focus animation
    this.cameraFocusPosition.show = false;
    setTimeout(() => {
      this.cameraFocusPosition.show = true;
    });

    await this.cameraPreview.tapToFocus(event.clientX || 0, event.clientY || 0);
  }

  ngOnInit() { }
}
