import { Injectable } from '@angular/core';
import { Action, State, StateContext, StateToken } from '@ngxs/store';
import * as moment from 'moment';
import { catchError, tap } from 'rxjs/operators';
import { ApiService } from '../../services/api/api.service';
import { MessageModel } from '../../tabs/messages/messages.model';
import { MessageDetailActions, MessageSendActions } from './message-detail.actions';
import { MessageDetailPageStateModel } from './message-detail.model';

export const initialState: MessageDetailPageStateModel = {
  isLoading: false,
  isFailed: false,
  isSuccess: false,
  error: null,
  listData: {},
};

export const STATE_TOKEN = new StateToken<MessageDetailPageStateModel>('messageDetail');

@State({
  name: STATE_TOKEN,
  defaults: initialState,
})
@Injectable()
export class MessageDetailPageState {
  constructor(private apiService: ApiService) {}

  @Action(MessageDetailActions.FetchMessageDetail)
  fetchMessages(ctx: StateContext<MessageDetailPageStateModel>, action: MessageDetailActions.FetchMessageDetail) {
    const state = ctx.getState();

    if (state.listData[action.messageId]) {
      return;
    }

    ctx.patchState({
      isLoading: true,
      isFailed: false,
      isSuccess: false,
    });

    return this.apiService.get(action.api).pipe(
      tap((messageDetail: MessageModel) =>
        ctx.dispatch(new MessageDetailActions.FetchMessageDetailSuccess(action.messageId, messageDetail)),
      ),
      catchError(() => ctx.dispatch(new MessageDetailActions.FetchMessageDetailFail('Error! Please try again.'))),
    );
  }

  @Action(MessageDetailActions.FetchMessageDetailSuccess)
  fetchMessagesSuccess(
    ctx: StateContext<MessageDetailPageStateModel>,
    action: MessageDetailActions.FetchMessageDetailSuccess,
  ) {
    const state = ctx.getState();
    ctx.patchState({
      listData: {
        ...state.listData,
        [action.messageId]: action.listData,
      },
      isLoading: false,
      isSuccess: true,
      isFailed: false,
      error: null,
    });
  }

  @Action(MessageDetailActions.FetchMessageDetailFail)
  fetchMessagesFail(
    ctx: StateContext<MessageDetailPageStateModel>,
    action: MessageDetailActions.FetchMessageDetailFail,
  ) {
    ctx.patchState({
      isLoading: false,
      isSuccess: false,
      isFailed: true,
      error: action.error,
    });
  }

  @Action(MessageSendActions.Send)
  sendMessage(ctx: StateContext<MessageDetailPageStateModel>, action: MessageSendActions.Send) {
    const state = ctx.getState();
    const messages = state.listData[action.messageId].messages;
    const messagesLength = messages.length;
    const lastMessagesId = messages[messagesLength - 1].id;

    ctx.patchState({
      listData: {
        ...state.listData,
        [action.messageId]: {
          ...state.listData[action.messageId],
          messages: [
            ...state.listData[action.messageId].messages,
            {
              id: (+lastMessagesId + 1).toString(),
              type: 'me',
              message: action.message,
              createdAt: moment().format(),
            },
          ],
        },
      },
    });
  }
}
