import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {
  tap,
  withLatestFrom
} from 'rxjs/operators';

import { selectMusicState } from '../../shared.state';
import { LocalStorageService } from '../../../services/local-storage/local-storage.service';

import {
  actionMusicSetId,
  actionMusicSetPlaying,
  actionMusicSetProgress,
  actionMusicSetVolume,
  actionMusic
} from './music.actions';
import { StateMusic } from './music.model';

export const MUSIC_KEY = 'MUSIC';

@Injectable()
export class MusicEffects {
  constructor(
    private actions$: Actions,
    private store: Store<StateMusic>,
    private localStorageService: LocalStorageService
  ) {
  }

  persistMusic = createEffect(
    () =>
      this.actions$.pipe(
        ofType(
          actionMusic,
          actionMusicSetId,
          actionMusicSetPlaying,
          actionMusicSetProgress,
          actionMusicSetVolume
        ),
        withLatestFrom(this.store.pipe(select(selectMusicState))),
        tap(([action, music]) =>
          this.localStorageService.setItem(MUSIC_KEY, music)
        )
      ),
    { dispatch: false }
  );
}
