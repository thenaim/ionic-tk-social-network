import { AppStoreLoadingStatesModel } from '../../core/store/store.model';

export interface ProfileModel {
  id: string;
  firstName: string;
  lastName: string;
  avatar: string;
  status: string;
  birthday: string;
  city: string;
  country: string;
  phone: string;
  username: string;
  lastOnline: string;
  isOnline: boolean;
  isMobileOnline: boolean;
  authToken: string;
  email: string;
  password: string;
}

export interface ProfileStateModel extends AppStoreLoadingStatesModel {
  listData: ProfileModel | null;
}

export interface ProfilePageStateModel {
  profile: ProfileStateModel;
}
