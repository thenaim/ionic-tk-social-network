import { RouterStateModel } from '@ngxs/router-plugin';
import { MessageDetailPageStateModel } from '../../pages/message-detail/message-detail.model';
import { MainPageStateModel } from '../../tabs/main/main.model';
import { MessagesPageStateModel } from '../../tabs/messages/messages.model';
import { ServicesPageStateModel } from '../../tabs/services/services.model';
import { AuthStateModel } from '../auth-guard/auth-guard.models';

export interface AppStoreModel {
  auth: AuthStateModel;
  main: MainPageStateModel;
  services: ServicesPageStateModel;
  messages: MessagesPageStateModel;
  messageDetail: MessageDetailPageStateModel;
  router: RouterStateModel;
}

export interface AppStoreLoadingStatesModel {
  isLoading: boolean;
  isFailed: boolean;
  isSuccess: boolean;
  error: string;
}
