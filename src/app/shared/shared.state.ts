import {
  ActionReducerMap,
  createFeatureSelector,
  MetaReducer,
  ActionReducer,
  INIT,
  UPDATE
} from '@ngrx/store';

import { LocalStorageService } from './local-storage/local-storage.service';

// Settings
import { settingsReducer } from './settings/settings.reducer';
import { SettingsState } from './settings/settings.model';

// Music
import { MusicState } from './music/music.model';
import { musicReducer } from './music/music.reducer';

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
  music: MusicState
}

export const selectMusicState = createFeatureSelector<
  AppState,
  MusicState
>('music');

export function initStateFromLocalStorage(
  reducer: ActionReducer<AppState>
): ActionReducer<AppState> {
  return function (state, action) {
    const newState = reducer(state, action);
    if ([INIT.toString(), UPDATE.toString()].includes(action.type)) {
      return { ...newState, ...LocalStorageService.loadInitialState() };
    }
    return newState;
  };
}
