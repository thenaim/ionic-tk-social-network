import { RouterState, RouterStateModel } from '@ngxs/router-plugin';
import { createSelector } from '@ngxs/store';
import { chain } from 'lodash';
import * as moment from 'moment';
import { MessageDetailPageStateModel } from './message-detail.model';
import { MessageDetailPageState } from './message-detail.state';

export const selectMessageDetail = () =>
  createSelector(
    [MessageDetailPageState, RouterState],
    (messageDetail: MessageDetailPageStateModel, routerState: RouterStateModel) =>
      messageDetail.listData[routerState.state.root.params.messageId],
  );

export const selectMessagesListDetail = () =>
  createSelector(
    [MessageDetailPageState, RouterState],
    (messageDetail: MessageDetailPageStateModel, routerState: RouterStateModel) => {
      const messagesDetail = messageDetail.listData[routerState.state.root.params.messageId];
      return messagesDetail
        ? chain(messagesDetail.messages)
            .groupBy((message) => moment(message.createdAt).format('DD-MM-YYYY'))
            .map((messages) => ({ createdAt: messages[0].createdAt, data: messages }))
            .value()
        : [];
    },
  );
