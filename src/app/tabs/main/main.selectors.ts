import { createSelector } from '@ngxs/store';
import { MainPageStateModel } from './main.model';
import { MainPageState } from './main.state';

export const selectMainTabsList = () =>
  createSelector([MainPageState], (state: MainPageStateModel) =>
    state.tabs.isLoading ? Array(10).fill({ skeleton: true }) : state.tabs.listData,
  );

export const selectMainTabsLoadingStates = () =>
  createSelector([MainPageState], (state: MainPageStateModel) => ({
    isLoading: state.tabs.isLoading,
    isSuccess: state.tabs.isSuccess,
    isFailed: state.tabs.isFailed,
  }));

export const selectStories = () =>
  createSelector([MainPageState], (state: MainPageStateModel) =>
    state.stories.isLoading ? Array(10).fill({ skeleton: true }) : state.stories.listData,
  );

export const selectStoriesLoadingStates = () =>
  createSelector([MainPageState], (state: MainPageStateModel) => ({
    isLoading: state.stories.isLoading,
    isSuccess: state.stories.isSuccess,
    isFailed: state.stories.isFailed,
  }));

export const selectNews = () =>
  createSelector([MainPageState], (state: MainPageStateModel) =>
    state.news.isLoading ? Array(10).fill({ skeleton: true }) : state.news.listData,
  );
