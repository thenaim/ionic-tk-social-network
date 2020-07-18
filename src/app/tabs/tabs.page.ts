import { Component } from '@angular/core';
import { MenuController, Platform, ModalController, IonRouterOutlet, AnimationController } from '@ionic/angular';
import { interval, Subscription, Observable, SubscriptionLike } from 'rxjs';
import { MusicPlayerComponent } from '../shared/music-player/music-player.component';

import { Howl, Howler } from 'howler';
import { MusicController, PlayerEventOptions, initialPlayerEventOptions } from '../shared/music-controller/music-controller.service';
import { Store, select } from '@ngrx/store';
import { actionMusicSetPlaying } from '../shared/music/music.actions';
import { selectMusic } from '../shared/music/music.selectors';
import { StateMusic, MusicState } from '../shared/music/music.model';
import { initialStateMusic } from '../shared/music/music.reducer';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {
  canOpenMenu = false;
  audioDuration = 0;
  audioCurrentPosition = 0;
  audioCheckInterval = interval(200);

  showBar: boolean = true;

  player: Howl = null;
  isPlaying = false;
  progress = 0;
  music: PlayerEventOptions = initialPlayerEventOptions;

  private subscriptions: SubscriptionLike[] = [];
  constructor(
    private platform: Platform,

    private menu: MenuController,
    private animationCtrl: AnimationController,
    private modalController: ModalController,
    private routerOutlet: IonRouterOutlet,
    private musicController: MusicController,
    private store: Store
  ) { }

  /**
  * Toggle music play/pause
  */
  toggleMusic() {
    this.musicController.togglePlayer(this.music.isPlaying, (this.music.seek / this.music.duration) * 100);
  }

  /**
  * Close music player
  */
  closePlayer() {
    this.musicController.abort();
  }

  nextMusic() { }

  prevMusic() { }

  seekMusic() { }

  updateProgressMusic() { }

  /**
  * On tab change
  * check tab if profile tab or not
  */
  tabChanged(event) {
    this.canOpenMenu = event.tab === 'profile';
  }

  /**
  * Open music modal
  */
  async openMusicModal(event: Event) {
    event.stopPropagation();
    event.preventDefault();

    // modal enter animation
    const enterAnimation = (baseEl: any) => {
      const backdropAnimation = this.animationCtrl.create()
        .addElement(baseEl.querySelector('ion-backdrop')!)
        .fromTo('opacity', '0.01', 'var(--backdrop-opacity)');

      const wrapperAnimation = this.animationCtrl.create()
        .addElement(baseEl.querySelector('.modal-wrapper')!)
        .keyframes([
          { offset: 0, opacity: '0', transform: 'translateY(100vh)' },
          { offset: 1, opacity: '0.99', transform: 'translateY(0vh)' }
        ]);

      return this.animationCtrl.create()
        .addElement(baseEl)
        .easing('cubic-bezier(0.32,0.72,0,1)')
        .duration(500)
        .addAnimation([backdropAnimation, wrapperAnimation]);
    }

    // modal leave animation
    const leaveAnimation = (baseEl: any) => {
      const backdropAnimation = this.animationCtrl.create()
        .addElement(baseEl.querySelector('ion-backdrop')!)
        .fromTo('opacity', 'var(--backdrop-opacity)', 0.0);

      const wrapperAnimation = this.animationCtrl.create()
        .addElement(baseEl.querySelectorAll('.modal-wrapper, .modal-shadow')!)
        .beforeStyles({ 'opacity': 1 })
        .fromTo('transform', 'translateY(0vh)', 'translateY(100vh)')
        .keyframes([
          { offset: 0, transform: 'translateY(0vh)' },
          { offset: 1, transform: 'translateY(100vh)' }
        ]);

      return this.animationCtrl.create()
        .addElement(baseEl)
        .easing('cubic-bezier(0.32,0.72,0,1)')
        .duration(500)
        .addAnimation([backdropAnimation, wrapperAnimation]);
    }

    // create modal
    const modal = await this.modalController.create({
      component: MusicPlayerComponent,
      cssClass: 'music-modal',
      swipeToClose: true,
      componentProps: {
        music: this.music
      },
      enterAnimation,
      leaveAnimation,
      // presentingElement: this.routerOutlet.nativeEl
    });
    return await modal.present();
  }

  /**
  * Close modal
  */
  openMenu(): void {
    if (this.canOpenMenu) {
      this.menu.open();
    }
  }

  ngOnInit(): void {
    /**
    * Subscribe to music events
    */
    this.subscriptions.push(
      this.musicController.onProgress.subscribe((res) => {
        this.music = { ...this.music, ...res };
        this.progress = +(this.music.seek / this.music.duration);
      })
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
    this.subscriptions = [];
  }
}
