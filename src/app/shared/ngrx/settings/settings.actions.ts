import { createAction, props } from '@ngrx/store';

import { AppLanguage, AppTheme } from './settings.model';

export const actionSettingsChangeLanguage = createAction(
  '[Settings] Change Language',
  props<{ language: AppLanguage }>()
);

export const actionSettingsChangeTheme = createAction(
  '[Settings] Change Theme',
  props<{ isDark: AppTheme }>()
);
