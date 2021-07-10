import { Injectable } from '@angular/core';
import { Action, State, StateContext, StateToken } from '@ngxs/store';
import { ApiService } from '../../services/api/api.service';
import { SettingsUpdateTheme } from './settings.actions';
import { SettingsPageStateModel } from './settings.model';

export const initialState: SettingsPageStateModel = {
  appearance: {
    isDarkMode: false,
  },
  language: {
    activeLanguage: 'en',
  },
};

export const STATE_TOKEN = new StateToken<SettingsPageStateModel>('settings');

@State({
  name: STATE_TOKEN,
  defaults: initialState,
})
@Injectable()
export class SettingsPageState {
  constructor(private apiService: ApiService) {}

  @Action(SettingsUpdateTheme)
  updateTheme(ctx: StateContext<SettingsPageStateModel>, action: SettingsUpdateTheme) {
    ctx.patchState({
      appearance: {
        isDarkMode: action.isDarkMode,
      },
    });
  }
}
