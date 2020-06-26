import { Component } from '@angular/core';
import { MenuController, Platform, ModalController, IonRouterOutlet } from '@ionic/angular';
import { interval, Subscription, Observable } from 'rxjs';
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

  audioSubscription: Subscription = new Subscription;
  constructor(
    private platform: Platform,

    private menu: MenuController,
    private modalController: ModalController,
    private routerOutlet: IonRouterOutlet,
    private musicController: MusicController,
    private store: Store
  ) { }

  scrolled(event) {
    console.log(event);
  }

  toggleMusic() {
    this.musicController.togglePlayer(this.music.isPlaying, (this.music.seek / this.music.duration) * 100);
  }

  closePlayer() {
    this.musicController.abort();
  }

  nextMusic() { }

  prevMusic() { }

  seekMusic() { }

  updateProgressMusic() { }

  tabChanged(event) {
    this.canOpenMenu = event.tab === 'profile';
  }

  async openMusicModal(event: Event) {
    event.stopPropagation();
    event.preventDefault();

    const modal = await this.modalController.create({
      component: MusicPlayerComponent,
      cssClass: 'music-modal',
      swipeToClose: true,
      componentProps: {
        music: this.music
      }
      // presentingElement: this.routerOutlet.nativeEl
    });
    return await modal.present();
  }

  openMenu(): void {
    if (this.canOpenMenu) {
      this.menu.open();
    }
  }

  ngOnInit(): void {
    this.musicController.onProgress.subscribe((res) => {
      this.music = { ...this.music, ...res };
      this.progress = +(this.music.seek / this.music.duration);
    });
  }
}
