import { createSelector } from '@ngxs/store';
import { MainPageStateModel } from './main.model';
import { MainPageState } from './main.state';

export class NewsSelectors {
  static selectMainTabs() {
    return createSelector([MainPageState], (state: MainPageStateModel) =>
      state.tabs.isLoading ? Array(10).fill({ skeleton: true }) : state.tabs.listData,
    );
  }
  static selectMainTabsLoadingStates() {
    return createSelector([MainPageState], (state: MainPageStateModel) => ({
      isLoading: state.tabs.isLoading,
      isSuccess: state.tabs.isSuccess,
      isFailed: state.tabs.isFailed,
    }));
  }

  static selectStories() {
    return createSelector([MainPageState], (state: MainPageStateModel) =>
      state.stories.isLoading ? Array(10).fill({ skeleton: true }) : state.stories.listData,
    );
  }
  static selectStoriesLoadingStates() {
    return createSelector([MainPageState], (state: MainPageStateModel) => ({
      isLoading: state.stories.isLoading,
      isSuccess: state.stories.isSuccess,
      isFailed: state.stories.isFailed,
    }));
  }

  static selectNews() {
    return createSelector([MainPageState], (state: MainPageStateModel) =>
      state.news.isLoading ? Array(10).fill({ skeleton: true }) : state.news.listData,
    );
  }
}
