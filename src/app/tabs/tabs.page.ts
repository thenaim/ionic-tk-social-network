import {Component, OnInit, OnDestroy} from '@angular/core';
import { MenuController, ModalController, AnimationController } from '@ionic/angular';
import { SubscriptionLike } from 'rxjs';
import { MusicModalEnterAnimation, MusicModalLeaveAnimation } from '../app.animations';

import { Howl } from 'howler';
import { MusicController, PlayerEventOptions, initialPlayerEventOptions } from '../services/music-controller/music-controller.service';
import { MusicPlayerComponent } from '../shared/components/music-player/music-player.component';
import { AppEventsService } from '../services/app-events/app-events.service';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage implements OnInit, OnDestroy {
  tabs: any[] = [
    { id: 'news', badge: 0, icon: 'reader-outline' },
    { id: 'explore', badge: 0, icon: 'compass-outline' },
    { id: 'messages', badge: 0, icon: 'chatbubble-outline' },
    { id: 'notifications', badge: 0, icon: 'notifications-outline' },
    { id: 'profile', badge: 0, icon: 'person-circle-outline' }
  ];
  activeTab = '';

  player: Howl = null;
  isPlaying = false;
  progress = 0;
  music: PlayerEventOptions = initialPlayerEventOptions;

  private subscriptions: SubscriptionLike[] = [];
  constructor(
    private appEvents: AppEventsService,
    private menu: MenuController,
    private animationCtrl: AnimationController,
    private modalController: ModalController,
    private musicController: MusicController
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

  /**
   * On tab change
   * check tab if profile tab or not
   */
  tabChanged(event) {
    this.activeTab = event.tab;
  }

  /**
   * On tab click
   * Send event, if user click tab second time or more
   * @param {any} tab - tab object
   */
  tabClicked(tab) {
    if (this.activeTab === tab.id) {
      this.appEvents.tabClicks.next(tab);
    }
  }

  /**
   * Open music modal
   */
  async openMusicModal(event: Event) {
    event.stopPropagation();
    event.preventDefault();

    const modal = await this.modalController.create({
      component: MusicPlayerComponent,
      cssClass: 'music-modal',
      swipeToClose: true,
      componentProps: {
        music: this.music
      },
      enterAnimation: MusicModalEnterAnimation,
      leaveAnimation: MusicModalLeaveAnimation,
      // presentingElement: this.routerOutlet.nativeEl
    });
    return await modal.present();
  }

  ngOnInit(): void {
    // Subscribe to music events
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
