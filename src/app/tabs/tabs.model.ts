import { AppStoreLoadingStatesModel } from '../core/store/store.model';

export type TabListModel = 'main' | 'services' | 'messages' | 'profile';

export interface TabModel {
  id: TabListModel;
  badge: number;
  icon: string;
  disabled: boolean;
}

export interface TabsStateModel extends AppStoreLoadingStatesModel {
  active: TabListModel;
  listData: TabModel[];
}
