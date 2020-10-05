import {
  ActionReducerMap,
  createFeatureSelector,
  MetaReducer,
  ActionReducer,
  INIT,
  UPDATE
} from '@ngrx/store';

import { LocalStorageService } from '../services/local-storage/local-storage.service';

// Settings
import { settingsReducer } from './ngrx/settings/settings.reducer';
import { SettingsState } from './ngrx/settings/settings.model';

// Music
import { MusicState } from './ngrx/music/music.model';
import { musicReducer } from './ngrx/music/music.reducer';

export const metaReducers: MetaReducer<AppState>[] = [
  initStateFromLocalStorage
];

export const reducers: ActionReducerMap<AppState> = {
  settings: settingsReducer,
  music: musicReducer
};

export const selectSettingsState = createFeatureSelector<
  AppState,
  SettingsState
>('settings');

export interface AppState {
  settings: SettingsState;
  music: MusicState;
}

export const selectMusicState = createFeatureSelector<
  AppState,
  MusicState
>('music');

export function initStateFromLocalStorage(
  reducer: ActionReducer<AppState>
): ActionReducer<AppState> {
  return function(state, action) {
    const newState = reducer(state, action);
    if ([INIT.toString(), UPDATE.toString()].includes(action.type)) {
      return { ...newState, ...LocalStorageService.loadInitialState() };
    }
    return newState;
  };
}
