/* eslint-disable @typescript-eslint/no-namespace */

import { MessageModel } from '../../tabs/messages/messages.model';
import { apiGetMessageDetail } from './message-detail.constant';

export namespace MessageDetailActions {
  export class FetchMessageDetail {
    static readonly type = '[Message detail] Fetch message detail';
    constructor(public messageId: string, public api: string = '') {
      this.api = apiGetMessageDetail(this.messageId);
    }
  }

  export class FetchMessageDetailSuccess {
    static readonly type = '[Message detail] Fetch message detail success';
    constructor(public messageId: string, public listData: MessageModel) {}
  }

  export class FetchMessageDetailFail {
    static readonly type = '[Message detail] Fetch message detail fail';
    constructor(public error: string) {}
  }
}

export namespace MessageSendActions {
  export class Send {
    static readonly type = '[MessageSendActions] Send message';
    constructor(public messageId: string, public message: string) {}
  }
}
