/* eslint-disable @typescript-eslint/no-namespace */

import { getLimitItemsHeightPerPage } from '../../core/urils/common-functions';
import { apiGetAllMessages } from './messages.constant';
import { MessageModel } from './messages.model';

/* Messages Actions */
export namespace MessagesActions {
  export class FetchMessages {
    static readonly type = '[Messages Tab] Fetch messages';
    constructor(
      public search: string,
      public page: number,
      public itemHeight = 66,
      public isRefresh = false,
      public api: string = apiGetAllMessages(),
    ) {
      this.api = apiGetAllMessages(this.search, this.page, getLimitItemsHeightPerPage(this.itemHeight));
    }
  }

  export class FetchMessagesSuccess {
    static readonly type = '[Messages Tab] Fetch messages success';
    constructor(public listData: MessageModel[], public page: number) {}
  }

  export class FetchMessagesFail {
    static readonly type = '[Messages Tab] Fetch messages fail';
    constructor(public error: string) {}
  }
}

export class PinMessage {
  static readonly type = '[Messages Tab] Pin messages';
  constructor(public id: string) {}
}

export class UnPinMessage {
  static readonly type = '[Messages Tab] UnPin messages';
  constructor(public id: string) {}
}
