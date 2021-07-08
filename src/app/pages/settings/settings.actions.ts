/* eslint-disable @typescript-eslint/no-namespace */

import { LanguagesModel } from './settings.model';

export class SettingsUpdateLanguageAction {
  static readonly type = '[Settings page] update language';
  constructor(public language: LanguagesModel) {}
}

export class SettingsUpdateTheme {
  static readonly type = '[Settings page] update theme';
  constructor(public isDarkMode: boolean) {}
}
