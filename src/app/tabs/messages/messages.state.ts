import { Injectable } from '@angular/core';
import { Action, State, StateContext, StateToken } from '@ngxs/store';
import { catchError, tap } from 'rxjs/operators';
import { ApiService } from '../../services/api/api.service';
import { MessagesActions, PinMessage, UnPinMessage } from './messages.actions';
import { MessageModel, MessagesPageStateModel } from './messages.model';

export const initialState: MessagesPageStateModel = {
  messages: {
    maxPinMessages: 4,
    listData: [],
    isLoading: true,
    isFailed: false,
    isSuccess: false,
    error: null,
  },
};

export const STATE_TOKEN = new StateToken<MessagesPageStateModel>('messages');

@State({
  name: STATE_TOKEN,
  defaults: initialState,
})
@Injectable()
export class MessagesPageState {
  constructor(private apiService: ApiService) {}

  @Action(MessagesActions.FetchMessages)
  fetchMessages(ctx: StateContext<MessagesPageStateModel>, action: MessagesActions.FetchMessages) {
    const state = ctx.getState();
    ctx.patchState({
      messages: {
        ...state.messages,
        isLoading: true,
        isFailed: false,
        isSuccess: false,
      },
    });

    return this.apiService.get(action.api).pipe(
      tap((messages: MessageModel[]) => ctx.dispatch(new MessagesActions.FetchMessagesSuccess(messages))),
      catchError(() => ctx.dispatch(new MessagesActions.FetchMessagesFail('Error! Please try again.'))),
    );
  }

  @Action(MessagesActions.FetchMessagesSuccess)
  fetchMessagesSuccess(ctx: StateContext<MessagesPageStateModel>, action: MessagesActions.FetchMessagesSuccess) {
    const state = ctx.getState();
    ctx.patchState({
      messages: {
        ...state.messages,
        listData: action.listData,
        isLoading: false,
        isSuccess: true,
        isFailed: false,
        error: null,
      },
    });
  }

  @Action(MessagesActions.FetchMessagesFail)
  fetchMessagesFail(ctx: StateContext<MessagesPageStateModel>, action: MessagesActions.FetchMessagesFail) {
    const state = ctx.getState();
    ctx.patchState({
      messages: {
        ...state.messages,
        isLoading: false,
        isSuccess: false,
        isFailed: true,
        error: action.error,
      },
    });
  }

  @Action(PinMessage)
  pinMessage(ctx: StateContext<MessagesPageStateModel>, action: PinMessage) {
    const state = ctx.getState();
    const pinnedMessagesLength = state.messages.listData.filter((message) => message.isPin).length;
    if (pinnedMessagesLength === state.messages.maxPinMessages) {
      return;
    }
    ctx.patchState({
      messages: {
        ...state.messages,
        listData: state.messages.listData.map((message) => {
          if (message.id === action.id) {
            return { ...message, isPin: true };
          }
          return message;
        }),
      },
    });
  }

  @Action(UnPinMessage)
  unpinMessage(ctx: StateContext<MessagesPageStateModel>, action: UnPinMessage) {
    const state = ctx.getState();
    ctx.patchState({
      messages: {
        ...state.messages,
        listData: state.messages.listData.map((message) => {
          if (message.id === action.id) {
            return { ...message, isPin: false };
          }
          return message;
        }),
      },
    });
  }
}
