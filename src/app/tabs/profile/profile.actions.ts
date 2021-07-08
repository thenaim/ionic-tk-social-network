/* eslint-disable @typescript-eslint/no-namespace */

import { LanguagesModel } from './profile.model';

export class ProfileUpdateLanguageAction {
  static readonly type = '[Profile Tab] update language';
  constructor(public language: LanguagesModel) {}
}

export class ProfileUpdateTheme {
  static readonly type = '[Profile Tab] update theme';
  constructor(public isDarkMode: boolean) {}
}
