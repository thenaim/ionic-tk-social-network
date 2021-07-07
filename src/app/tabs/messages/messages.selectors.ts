import { createSelector } from '@ngxs/store';
import { MessagesPageStateModel } from './messages.model';
import { MessagesPageState } from './messages.state';

export class MessagesSelectors {
  static selectMessages() {
    return createSelector([MessagesPageState], (state: MessagesPageStateModel) =>
      state.messages.isLoading
        ? Array(10).fill({ skeleton: true })
        : state.messages.listData.slice().sort((a, b) => +b.isPin - +a.isPin),
    );
  }
  static selectMessagesLoadingStates() {
    return createSelector([MessagesPageState], (state: MessagesPageStateModel) => ({
      isLoading: state.messages.isLoading,
      isSuccess: state.messages.isSuccess,
      isFailed: state.messages.isFailed,
    }));
  }
}
