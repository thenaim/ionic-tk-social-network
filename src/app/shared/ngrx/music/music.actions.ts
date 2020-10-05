import { createAction, props } from '@ngrx/store';

import { id, isPlaying, progress, volume, MusicState } from './music.model';

export const actionMusic = createAction(
  '[Music] Set music',
  props<MusicState>()
);

export const actionMusicSetId = createAction(
  '[Music] Set Id',
  props<{ id: id }>()
);

export const actionMusicSetPlaying = createAction(
  '[Music] Set isPlaying',
  props<{ isPlaying: isPlaying }>()
);

export const actionMusicSetProgress = createAction(
  '[Music] Set Progress',
  props<{ progress: progress }>()
);

export const actionMusicSetVolume = createAction(
  '[Music] Set Volume',
  props<{ volume: volume }>()
);
