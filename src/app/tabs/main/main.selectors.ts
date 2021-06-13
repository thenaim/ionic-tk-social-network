import { createSelector } from '@ngxs/store';
import { MainPageStateModel } from './main.model';
import { MainPageState } from './main.state';

export class NewsSelectors {
  static selectMainTabs() {
    return createSelector([MainPageState], (state: MainPageStateModel) => state.tabs.listData);
  }
  static selectMainTabsLoadingStates() {
    return createSelector([MainPageState], (state: MainPageStateModel) => ({
      isLoading: state.tabs.isLoading,
      isSuccess: state.tabs.isSuccess,
      isFailed: state.tabs.isFailed,
    }));
  }

  static selectStories() {
    return createSelector([MainPageState], (state: MainPageStateModel) => state.stories.listData);
  }
  static selectStoriesLoadingStates() {
    return createSelector([MainPageState], (state: MainPageStateModel) => ({
      isLoading: state.stories.isLoading,
      isSuccess: state.stories.isSuccess,
      isFailed: state.stories.isFailed,
    }));
  }

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
