import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FakerService } from '../../shared/faker/faker.service';
import { MusicController, PlayerEventOptions, initialPlayerEventOptions } from 'src/app/shared/music-controller/music-controller.service';
import { SubscriptionLike } from 'rxjs';

import { AppData } from '../../providers/app-data';

@Component({
  selector: 'app-music',
  templateUrl: './music.page.html',
  styleUrls: ['./music.page.scss'],
})
export class MusicPage implements OnInit {

  searchMusic: FormControl = new FormControl('');
  activeSegment: FormControl = new FormControl('my_music');

  playlists: any[] = [];
  musics: any[] = [];
  playingSongId = null;

  music: PlayerEventOptions = initialPlayerEventOptions;

  audioSubscription: SubscriptionLike[] = [];
  constructor(
    private appData: AppData,
    private musicController: MusicController,
    private fakerService: FakerService
  ) { }

  doRefresh(event) {
    this.dataInit();

    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 400);
  }

  playMusic(music) {
    this.playingSongId = music.id;
    this.musicController.playMusic(music);
  }

  async dataInit() {
    this.musics = await this.appData.getMusics();
    this.playlists = await this.appData.getPlaylists();
  }

  ngOnInit() {
    this.dataInit();

    this.music = this.musicController.getOptions();
    this.audioSubscription.push(
      this.musicController.onProgress.subscribe((res) => {
        this.music = { ...this.music, ...res };
      })
    );
  }

  ngOnDestroy(): void {
    this.audioSubscription.forEach(subscription => subscription.unsubscribe());
    this.audioSubscription = [];
  }

}
