import { createSelector } from '@ngxs/store';
import { MessagesPageStateModel } from './messages.model';
import { MessagesPageState } from './messages.state';

export const selectMessages = () =>
  createSelector([MessagesPageState], (state: MessagesPageStateModel) =>
    state.messages.pages
      .map((key: number) => state.messages.listData[key])
      .reduce((a, b) => a.concat(b), [])
      .slice()
      .sort((a, b) => +b.isPin - +a.isPin),
  );

export const selectActivePage = () =>
  createSelector([MessagesPageState], (state: MessagesPageStateModel) => state.messages.activePage);

export const selectMessagesLoadingStates = () =>
  createSelector([MessagesPageState], (state: MessagesPageStateModel) => ({
    isLoading: state.messages.isLoading,
    isSuccess: state.messages.isSuccess,
    isFailed: state.messages.isFailed,
  }));
