import { AppStoreLoadingStatesModel } from '../../core/store/store.model';

export interface MessageItem {
  id: string;
  type: string;
  message: string;
  createdAt: string;
}

export interface MessageModel {
  firstName: string;
  lastName: string;
  avatar: string;
  lastMessage: string;
  messages: MessageItem[];
  isRead: boolean;
  isPin: boolean;
  isMute: boolean;
  lastMessageSended: string;
  lastOnline: string;
  id: string;
}

export interface MessagesStateModel extends AppStoreLoadingStatesModel {
  maxPinMessages: number;
  listData: MessageModel[];
}

export interface MessagesPageStateModel {
  messages: MessagesStateModel;
}
