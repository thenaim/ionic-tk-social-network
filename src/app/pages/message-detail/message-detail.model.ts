import { AppStoreLoadingStatesModel } from '../../core/store/store.model';
import { MessageModel } from '../../tabs/messages/messages.model';

export interface MessageDetailPageStateModel extends AppStoreLoadingStatesModel {
  listData: {
    [propName: string]: MessageModel;
  };
}

export interface MessagesGroupedItems {
  id: string;
  type: string;
  message: string;
  createdAt: string;
}

export interface MessagesGrouped {
  createdAt: string;
  data: MessagesGroupedItems[];
}
