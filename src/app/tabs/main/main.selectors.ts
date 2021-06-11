import { createSelector } from '@ngxs/store';
import { MainPageStateModel } from './main.model';
import { MainPageState } from './main.state';

export class NewsSelectors {
  static selectNews() {
    return createSelector([MainPageState], (state: MainPageStateModel) => state.news.listData);
  }

  static selectNewsLoadingStates() {
    return createSelector([MainPageState], (state: MainPageStateModel) => ({
      isLoading: state.news.isLoading,
      isSuccess: state.news.isSuccess,
      isFailed: state.news.isFailed,
    }));
  }
}
