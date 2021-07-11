import { Injectable } from '@angular/core';
import { Action, State, StateContext, StateToken } from '@ngxs/store';
import { catchError, tap } from 'rxjs/operators';
import { cloneDeep } from 'lodash';
import { ApiService } from '../../services/api/api.service';
import { MessagesActions, PinMessage, UnPinMessage } from './messages.actions';
import { MessageModel, MessagesPageStateModel } from './messages.model';

export const initialState: MessagesPageStateModel = {
  messages: {
    maxPinMessages: 4,
    activePage: 1,
    pages: [],
    listData: null,
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
    if (!state.messages.listData || action.isRefresh) {
      ctx.patchState({
        messages: {
          ...state.messages,
          pages: [],
          isLoading: true,
          isFailed: false,
          isSuccess: false,
        },
      });
    }

    return this.apiService.get(action.api).pipe(
      tap((messages: MessageModel[]) => ctx.dispatch(new MessagesActions.FetchMessagesSuccess(messages, action.page))),
      catchError(() => ctx.dispatch(new MessagesActions.FetchMessagesFail('Error! Please try again.'))),
    );
  }

  @Action(MessagesActions.FetchMessagesSuccess)
  fetchMessagesSuccess(ctx: StateContext<MessagesPageStateModel>, action: MessagesActions.FetchMessagesSuccess) {
    const state = ctx.getState();
    const isPageAlreadyExist = state.messages.pages.find((page) => page === action.page);
    if (action.listData.length) {
      ctx.patchState({
        messages: {
          ...state.messages,
          activePage: action.page,
          pages: isPageAlreadyExist ? [...state.messages.pages] : [...state.messages.pages, action.page],
          listData: {
            ...state.messages.listData,
            [action.page]: action.listData,
          },
          isLoading: false,
          isSuccess: true,
          isFailed: false,
          error: null,
        },
      });
    }
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
    const pinnedMessagesLength = Object.keys(state.messages.listData)
      .reduce((a, b) => a.concat(b), [])
      .filter((message) => message.isPin).length;
    if (pinnedMessagesLength === state.messages.maxPinMessages) {
      return;
    }
    const listDataClone = cloneDeep(state.messages.listData);
    for (const key in listDataClone) {
      if (Object.prototype.hasOwnProperty.call(listDataClone, key)) {
        const messages = listDataClone[key];
        const findMessage = messages.findIndex((message) => message.id === action.id);
        if (findMessage) {
          listDataClone[key][findMessage].isPin = true;
        }
      }
    }
    ctx.setState({
      ...state,
      messages: {
        ...state.messages,
        listData: listDataClone,
      },
    });
  }

  @Action(UnPinMessage)
  unpinMessage(ctx: StateContext<MessagesPageStateModel>, action: UnPinMessage) {
    const state = ctx.getState();
    const listDataClone = cloneDeep(state.messages.listData);
    for (const key in listDataClone) {
      if (Object.prototype.hasOwnProperty.call(listDataClone, key)) {
        const messages = listDataClone[key];
        const findMessage = messages.findIndex((message) => message.id === action.id);
        if (findMessage) {
          listDataClone[key][findMessage].isPin = false;
        }
      }
    }
    ctx.setState({
      ...state,
      messages: {
        ...state.messages,
        listData: listDataClone,
      },
    });
  }
}
