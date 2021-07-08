import { createSelector } from '@ngxs/store';
import { MessagesPageStateModel } from './messages.model';
import { MessagesPageState } from './messages.state';

export const selectMessages = () =>
  createSelector([MessagesPageState], (state: MessagesPageStateModel) =>
    state.messages.isLoading
      ? Array(10).fill({ skeleton: true })
      : state.messages.listData.slice().sort((a, b) => +b.isPin - +a.isPin),
  );

export const selectMessagesLoadingStates = () =>
  createSelector([MessagesPageState], (state: MessagesPageStateModel) => ({
    isLoading: state.messages.isLoading,
    isSuccess: state.messages.isSuccess,
    isFailed: state.messages.isFailed,
  }));
