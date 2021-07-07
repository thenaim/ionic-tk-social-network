/* eslint-disable @typescript-eslint/no-namespace */

import { apiGetAllMessages } from './messages.constant';
import { MessageModel } from './messages.model';

/* Messages Actions */
export namespace MessagesActions {
  export class FetchMessages {
    static readonly type = '[Messages Tab] Fetch messages';
    constructor(public search: string, public api: string = apiGetAllMessages('')) {
      this.api = apiGetAllMessages(this.search);
    }
  }

  export class FetchMessagesSuccess {
    static readonly type = '[Messages Tab] Fetch messages success';
    constructor(public listData: MessageModel[]) {}
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
