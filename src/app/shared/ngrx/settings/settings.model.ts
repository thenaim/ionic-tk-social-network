import { AppState } from '../../shared.state';

export type Language = 'en' | 'ru';
export type Theme = true | false;

export interface SettingsState {
  language: string;
  isDark: boolean;
}

export interface State extends AppState {
  settings: SettingsState;
}
