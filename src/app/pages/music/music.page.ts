import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FakerService } from '../../shared/faker/faker.service';
import { MusicController, PlayerEventOptions, initialPlayerEventOptions } from 'src/app/shared/music-controller/music-controller.service';
import { SubscriptionLike } from 'rxjs';

import { AppData } from '../../providers/app-data';
import { element } from 'protractor';

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

  /**
  * On refresh
  */
  doRefresh(event) {
    this.appData.getPlaylists().then((playlist) => {
      this.playlists = playlist;

      this.appData.getMusics().then((music) => {
        this.musics = music;
      });
    });

    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 400);
  }

  /**
  * Play music
  * 
  * @param {Object} music - music data for play
  */
  playMusic(music) {
    this.playingSongId = music.id;
    this.musicController.playMusic(music);
  }

  ngOnInit() {
    this.appData.getPlaylists().then((playlist) => {
      this.playlists = playlist;

      this.appData.getMusics().then((music) => {
        this.musics = music;
      });
    });

    this.music = this.musicController.getOptions();
    this.audioSubscription.push(
      this.activeSegment.valueChanges.subscribe((res) => {

        // cleare random image loaded value on tab change
        this.playlists.forEach((element) => {
          element.imgLoaded = false;
        });
        this.musics.forEach((element) => {
          element.imgLoaded = false;
        });
      }),

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
