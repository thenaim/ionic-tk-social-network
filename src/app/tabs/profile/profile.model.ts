import { AppStoreLoadingStatesModel } from '../../core/store/store.model';

export type LanguagesModel = 'ru' | 'en';

export interface ProfileStateModel extends AppStoreLoadingStatesModel {
  listData: any[];
}

export interface ProfilePageStateModel {
  profile: ProfileStateModel;
  isDarkMode: boolean;
  language: LanguagesModel;
}
