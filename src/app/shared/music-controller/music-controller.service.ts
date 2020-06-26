import { Injectable } from '@angular/core';
import { Howl } from 'howler';
import { interval, SubscriptionLike, Subject, Observable } from 'rxjs';
import { Config } from '@ionic/angular';
import { tap } from 'rxjs/operators';

export interface PlayerConfiguration {
  id: string;
  author?: string;
  song?: string;
};

export interface PlayerEventOptions {
  id?: string;
  author?: string;
  song?: string;
  isPlaying?: boolean;
  isEnd?: boolean;
  duration?: number;
  seek?: number;
  volume?: number;
  repeat?: boolean;
  show?: boolean;
};

export const initialPlayerEventOptions: PlayerEventOptions = {
  id: '',
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
    this.options = { ...this.options, ...options }
  }));

  private playerSubscriptions: SubscriptionLike[] = [];
  constructor(
    private config: Config
  ) { }

  public playMusic(configuration: PlayerConfiguration) {
    if (this.player) {
      this.abort();
    }

    this.progress.next({ author: configuration.author, song: configuration.song, show: true });

    this.player = new Howl({
      src: [`./assets/musics/${configuration.id}.mp3`],
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
      onstop: () => {
        this.abort();
      },
      // onvolume: () => { },
      // onrate: () => { },
      // onseek: () => { },
      onplay: () => {
        this.unsubscribePlayerEvents();

        this.progress.next({
          id: configuration.id,
          isPlaying: true,
          duration: this.player.duration(),
          seek: +this.player.seek(),
          volume: this.player.volume()
        });

        this.playerSubscriptions.push(
          this.playerCheckInterval.subscribe(() => {
            if (!this.options.isPlaying) {
              return;
            }

            this.progress.next({ seek: +this.player.seek() });
          })
        );
      },
      onend: () => {
        if (this.options.repeat) {
          this.player.play();
        } else {
          this.unsubscribePlayerEvents();
          this.progress.next({ isPlaying: false, isEnd: true });
        }
      }
    });

    this.player.play();
  }

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

  public seek(value: number) {
    this.player.seek(this.player.duration() * (value / 100));
  }

  public volume(value: number) {
    this.player.volume(value);
    this.progress.next({ volume: this.player.volume() });
  }

  public getOptions(): PlayerEventOptions {
    return this.options;
  }

  public abort() {
    this.player.unload();

    this.options = initialPlayerEventOptions;
    this.progress.next(this.options);
    this.unsubscribePlayerEvents();
  }

  public secondsToTime(seconds: number) {
    let h = Math.floor(seconds / 3600);
    let m = Math.floor(seconds % 3600 / 60);
    let s = Math.floor(seconds % 60);

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
