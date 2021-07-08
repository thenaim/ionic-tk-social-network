import { Injectable } from '@angular/core';
import { State, StateToken } from '@ngxs/store';
import { ApiService } from '../../services/api/api.service';
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
}
