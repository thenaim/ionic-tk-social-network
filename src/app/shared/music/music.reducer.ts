import { MusicState } from './music.model';
import {
  actionMusicSetId,
  actionMusicSetPlaying,
  actionMusicSetProgress,
  actionMusicSetVolume,
  actionMusic
} from './music.actions';
import { Action, createReducer, on } from '@ngrx/store';

export const initialStateMusic: MusicState = {
  id: '',
  isPlaying: false,
  progress: 0,
  volume: 0
};

const reducer = createReducer(
  initialStateMusic,
  on(
    actionMusic,
    actionMusicSetId,
    actionMusicSetPlaying,
    actionMusicSetProgress,
    actionMusicSetVolume,
    (state, action) => ({ ...state, ...action })
  )
);

export function musicReducer(
  state: MusicState | undefined,
  action: Action
) {
  return reducer(state, action);
}
