import { Injectable } from '@angular/core';
import { Howl } from 'howler';
import { interval, SubscriptionLike, Subject, Observable } from 'rxjs';
import { Config } from '@ionic/angular';
import { tap } from 'rxjs/operators';

export interface PlayerConfiguration {
  id: string;
  image: string;
  author?: string;
  song?: string;
}

export interface PlayerEventOptions {
  id?: string;
  image?: string;
  author?: string;
  song?: string;
  isPlaying?: boolean;
  isEnd?: boolean;
  duration?: number;
  seek?: number;
  volume?: number;
  repeat?: boolean;
  show?: boolean;
}

export const initialPlayerEventOptions: PlayerEventOptions = {
  id: '',
  image: '',
  isPlaying: false,
  isEnd: false,
  duration: 0,
  seek: 0,
  volume: 1,
  repeat: false,
  show: false
};

@Injectable({
  providedIn: 'root'
})
export class MusicController {
  private player: Howl;

  public options: PlayerEventOptions = initialPlayerEventOptions;

  private playerCheckInterval = interval(1000);

  public progress: Subject<PlayerEventOptions> = new Subject();
  public onProgress: Observable<PlayerEventOptions> = this.progress.pipe(tap((options: PlayerEventOptions) => {
    this.options = { ...this.options, ...options };
  }));

  private playerSubscriptions: SubscriptionLike[] = [];
  constructor(
    private config: Config
  ) { }

  /**
  * Play music function
  */
  public playMusic(configuration: PlayerConfiguration) {
    if (this.player) {
      this.player.stop();
      this.unsubscribePlayerEvents();
    }

    this.progress.next({ image: configuration.image, author: configuration.author, song: configuration.song, show: true });

    this.player = new Howl({
      src: [`./assets/musics/5612785349.mp3`],
      html5: this.config.get('mode') === 'ios',
      volume: 0.5,

      // onload: () => { },
      onloaderror: () => {
        this.abort();
      },
      onplayerror: () => {
        this.abort();
      },
      onpause: () => {
        this.progress.next({ isPlaying: false });
        this.unsubscribePlayerEvents();
      },
      // onvolume: () => { },
      // onrate: () => { },
      // onseek: () => { },
      onplay: () => {
        // unsubscribe player events before start
        this.unsubscribePlayerEvents();

        // send music data
        this.progress.next({
          id: configuration.id,
          isPlaying: true,
          duration: this.player.duration(),
          seek: +this.player.seek(),
          volume: this.player.volume()
        });

        // subscribe to music playing events
        this.playerSubscriptions.push(
          this.playerCheckInterval.subscribe(() => {
            // if not playing stop sending event
            if (!this.options.isPlaying) {
              return;
            }

            // send music position
            this.progress.next({ seek: +this.player.seek() });
          })
        );
      },
      onend: () => {
        // if music repeat active, then play repeat
        if (this.options.repeat) {
          this.player.play();
        } else {
          // unsubscribe and stop playing
          this.unsubscribePlayerEvents();
          this.progress.next({ isPlaying: false, isEnd: true });
        }
      }
    });

    this.player.play();
  }

  /**
  * Toggle player function
  * @param {boolean} pause
  * @param {number} seek - music position
  */
  public togglePlayer(pause: boolean, seek: number) {
    if (pause) {
      this.player.pause();
    } else {
      if (!this.options.isEnd) {
        this.seek(seek);
      }
      this.player.play();
    }
  }

  /**
  * Music seek function
  * @param {number} seek - music position
  */
  public seek(seek: number) {
    this.player.seek(this.player.duration() * (seek / 100));
  }

  /**
  * Music value function
  * @param {number} value - music valume
  */
  public volume(volume: number) {
    this.player.volume(volume);
    this.progress.next({ volume: this.player.volume() });
  }

  /**
  * Get player options (data)
  */
  public getOptions(): PlayerEventOptions {
    return this.options;
  }

  /**
  * Music abort
  */
  public abort() {
    this.player.unload();

    this.options = initialPlayerEventOptions;
    this.progress.next(this.options);
    this.unsubscribePlayerEvents();
  }

  /**
  * Seconds to time function
  * for music player modal
  *
  * @param {number} seconds
  */
  public secondsToTime(seconds: number) {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor(seconds % 3600 / 60);
    const s = Math.floor(seconds % 60);

    const hms = [];
    if (h) {
      hms.push(h.toString().padStart(2, '0'));
      hms.push(m.toString().padStart(2, '0'));
    } else {
      hms.push(m.toString());
    }
    hms.push(s.toString().padStart(2, '0'));

    return hms.join(':');
  }

  public unsubscribePlayerEvents() {
    this.playerSubscriptions.forEach(subscription => subscription.unsubscribe());
    this.playerSubscriptions = [];
  }

  ngOnInit(): void { }

  ngOnDestroy(): void {
    this.unsubscribePlayerEvents();
  }
}
