import { Injectable } from '@angular/core';
import { Action, State, StateContext, StateToken } from '@ngxs/store';
import { catchError, tap } from 'rxjs/operators';
import { ApiService } from '../../services/api/api.service';
import { FetchNews, FetchNewsFail, FetchNewsSuccess } from './main.actions';
import { MainPageStateModel } from './main.model';

export const initialState: MainPageStateModel = {
  news: {
    isLoading: false,
    isFailed: false,
    isSuccess: false,
    error: null,
    listData: [],
  },
  stories: {
    isLoading: false,
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

  @Action(FetchNews)
  fetchNews(ctx: StateContext<MainPageStateModel>, action: FetchNews) {
    const state = ctx.getState();
    ctx.setState({
      ...state,
      news: {
        ...state.news,
        isLoading: true,
        isFailed: false,
        isSuccess: false,
      },
    });

    return this.apiService.get(action.api).pipe(
      tap((news) => ctx.dispatch(new FetchNewsSuccess(news))),
      catchError(() => ctx.dispatch(new FetchNewsFail('Error! Please try again.'))),
    );
  }

  @Action(FetchNewsSuccess)
  fetchNewsSuccess(ctx: StateContext<MainPageStateModel>, action: FetchNewsSuccess) {
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

  @Action(FetchNewsFail)
  fetchNewsFail(ctx: StateContext<MainPageStateModel>, action: FetchNewsFail) {
    const state = ctx.getState();
    ctx.setState({
      ...state,
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
