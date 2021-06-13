import { AppStoreLoadingStatesModel } from '../../core/store/store.model';

export interface ServicesStateModel extends AppStoreLoadingStatesModel {
  listData: any[];
}

export interface ServicesPageStateModel {
  services: ServicesStateModel;
}
