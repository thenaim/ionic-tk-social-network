import { Injectable } from '@angular/core';
import { Action, State, StateContext, StateToken } from '@ngxs/store';
import { catchError, tap } from 'rxjs/operators';
import { UsersStoriesModel } from '../../components/users-stories/users-stories.model';
import { ApiService } from '../../services/api/api.service';
import { FetchNewsActions, MainTabsActions, StoriesActions } from './main.actions';
import { MainPageStateModel, MainTabModel, NewsModel } from './main.model';

export const initialState: MainPageStateModel = {
  tabs: {
    isLoading: true,
    isFailed: false,
    isSuccess: false,
    error: null,
    listData: [],
  },
  stories: {
    isLoading: true,
    isFailed: false,
    isSuccess: false,
    error: null,
    listData: [],
  },
  news: {
    isLoading: true,
    isFailed: false,
    isSuccess: false,
    error: null,
    listData: [],
  },
};

export const NEWS_STATE_TOKEN = new StateToken<MainPageStateModel>('main');

@State({
  name: NEWS_STATE_TOKEN,
  defaults: initialState,
})
@Injectable()
export class MainPageState {
  constructor(private apiService: ApiService) {}
  /* Stories Actions */
  @Action(MainTabsActions.FetchMainTabs)
  fetchMainTabs(ctx: StateContext<MainPageStateModel>, action: MainTabsActions.FetchMainTabs) {
    const state = ctx.getState();
    ctx.patchState({
      tabs: {
        ...state.tabs,
        isLoading: true,
        isFailed: false,
        isSuccess: false,
      },
    });

    return this.apiService.get(action.api).pipe(
      tap((tabs: MainTabModel[]) => ctx.dispatch(new MainTabsActions.FetchMainTabsSuccess(tabs))),
      catchError(() => ctx.dispatch(new MainTabsActions.FetchMainTabsFail('Error! Please try again.'))),
    );
  }

  @Action(MainTabsActions.FetchMainTabsSuccess)
  fetchMainTabsSuccess(ctx: StateContext<MainPageStateModel>, action: MainTabsActions.FetchMainTabsSuccess) {
    ctx.patchState({
      tabs: {
        listData: action.listData,
        isLoading: false,
        isSuccess: true,
        isFailed: false,
        error: null,
      },
    });
  }

  @Action(MainTabsActions.FetchMainTabsFail)
  fetchMainTabsFail(ctx: StateContext<MainPageStateModel>, action: MainTabsActions.FetchMainTabsFail) {
    const state = ctx.getState();
    ctx.patchState({
      tabs: {
        ...state.tabs,
        isLoading: false,
        isSuccess: false,
        isFailed: true,
        error: action.error,
      },
    });
  }

  /* Stories Actions */
  @Action(StoriesActions.FetchStories)
  fetchStories(ctx: StateContext<MainPageStateModel>, action: StoriesActions.FetchStories) {
    const state = ctx.getState();
    ctx.patchState({
      stories: {
        ...state.stories,
        isLoading: true,
        isFailed: false,
        isSuccess: false,
      },
    });

    return this.apiService.get(action.api).pipe(
      tap((stories: UsersStoriesModel[]) => ctx.dispatch(new StoriesActions.FetchStoriesSuccess(stories))),
      catchError(() => ctx.dispatch(new StoriesActions.FetchStoriesFail('Error! Please try again.'))),
    );
  }

  @Action(StoriesActions.FetchStoriesSuccess)
  fetchStoriesSuccess(ctx: StateContext<MainPageStateModel>, action: StoriesActions.FetchStoriesSuccess) {
    ctx.patchState({
      stories: {
        listData: action.listData,
        isLoading: false,
        isSuccess: true,
        isFailed: false,
        error: null,
      },
    });
  }

  @Action(StoriesActions.FetchStoriesFail)
  fetchStoriesFail(ctx: StateContext<MainPageStateModel>, action: StoriesActions.FetchStoriesFail) {
    const state = ctx.getState();
    ctx.patchState({
      stories: {
        ...state.stories,
        isLoading: false,
        isSuccess: false,
        isFailed: true,
        error: action.error,
      },
    });
  }

  /* News Actions */
  @Action(FetchNewsActions.FetchNews)
  fetchNews(ctx: StateContext<MainPageStateModel>, action: FetchNewsActions.FetchNews) {
    const state = ctx.getState();
    ctx.patchState({
      news: {
        ...state.news,
        isLoading: true,
        isFailed: false,
        isSuccess: false,
      },
    });

    return this.apiService.get(action.api).pipe(
      tap((news: NewsModel[]) => ctx.dispatch(new FetchNewsActions.FetchNewsSuccess(news))),
      catchError(() => ctx.dispatch(new FetchNewsActions.FetchNewsFail('Error! Please try again.'))),
    );
  }

  @Action(FetchNewsActions.FetchNewsSuccess)
  fetchNewsSuccess(ctx: StateContext<MainPageStateModel>, action: FetchNewsActions.FetchNewsSuccess) {
    ctx.patchState({
      news: {
        listData: action.listData,
        isLoading: false,
        isSuccess: true,
        isFailed: false,
        error: null,
      },
    });
  }

  @Action(FetchNewsActions.FetchNewsFail)
  fetchNewsFail(ctx: StateContext<MainPageStateModel>, action: FetchNewsActions.FetchNewsFail) {
    const state = ctx.getState();
    ctx.patchState({
      news: {
        ...state.news,
        isLoading: false,
        isSuccess: false,
        isFailed: true,
        error: action.error,
      },
    });
  }
}
