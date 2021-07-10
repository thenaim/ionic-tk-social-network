import { createSelector } from '@ngxs/store';
import { SettingsPageStateModel } from './settings.model';
import { SettingsPageState } from './settings.state';

export const selectIsDarkMode = () =>
  createSelector([SettingsPageState], (state: SettingsPageStateModel) => state.appearance.isDarkMode);
