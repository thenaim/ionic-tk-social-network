import { createSelector } from '@ngrx/store';

import { MusicState } from './music.model';
import { selectMusicState } from '../shared.state';

export const selectMusic = createSelector(
  selectMusicState,
  (state: MusicState) => state
);

export const selectMusicId = createSelector(
  selectMusicState,
  (state: MusicState) => state.id
);

export const selectMusicPlaying = createSelector(
  selectMusicState,
  (state: MusicState) => state.isPlaying
);

export const selectMusicProgress = createSelector(
  selectMusicState,
  (state: MusicState) => state.progress
);

export const selectMusicVolume = createSelector(
  selectMusicState,
  (state: MusicState) => state.volume
);
