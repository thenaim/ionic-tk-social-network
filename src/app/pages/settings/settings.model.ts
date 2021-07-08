import { AppearancePageModel } from './appearance/appearance.model';

export type LanguagesType = 'ru' | 'en';

export interface LanguagesModel {
  language: {
    activeLanguage: LanguagesType;
  };
}

export interface SettingsPageStateModel extends AppearancePageModel, LanguagesModel {}
