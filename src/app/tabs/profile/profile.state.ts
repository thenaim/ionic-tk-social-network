import { Injectable } from '@angular/core';
import { Action, State, StateContext, StateToken } from '@ngxs/store';
import { catchError, tap } from 'rxjs/operators';
import { ApiService } from '../../services/api/api.service';
import { ProfileActions } from './profile.actions';
import { ProfileModel, ProfilePageStateModel } from './profile.model';

export const initialState: ProfilePageStateModel = {
  profile: {
    isLoading: true,
    isFailed: false,
    isSuccess: false,
    error: null,
    listData: null,
  },
};

export const STATE_TOKEN = new StateToken<ProfilePageStateModel>('profile');

@State({
  name: STATE_TOKEN,
  defaults: initialState,
})
@Injectable()
export class ProfilePageState {
  constructor(private apiService: ApiService) {}

  @Action(ProfileActions.FetchUser)
  fetchUser(ctx: StateContext<ProfilePageStateModel>, action: ProfileActions.FetchUser) {
    const state = ctx.getState();
    ctx.patchState({
      profile: {
        ...state.profile,
        isLoading: true,
        isFailed: false,
        isSuccess: false,
      },
    });

    return this.apiService.get(action.api).pipe(
      tap((profile: ProfileModel) => ctx.dispatch(new ProfileActions.FetchUserSuccess(profile))),
      catchError(() => ctx.dispatch(new ProfileActions.FetchUserFail('Error! Please try again.'))),
    );
  }

  @Action(ProfileActions.FetchUserSuccess)
  fetchUserSuccess(ctx: StateContext<ProfilePageStateModel>, action: ProfileActions.FetchUserSuccess) {
    const state = ctx.getState();
    ctx.patchState({
      profile: {
        ...state.profile,
        listData: action.listData,
        isLoading: false,
        isSuccess: true,
        isFailed: false,
        error: null,
      },
    });
  }

  @Action(ProfileActions.FetchUserFail)
  fetchUserFail(ctx: StateContext<ProfilePageStateModel>, action: ProfileActions.FetchUserFail) {
    const state = ctx.getState();
    ctx.patchState({
      profile: {
        ...state.profile,
        isLoading: false,
        isSuccess: false,
        isFailed: true,
        error: action.error,
      },
    });
  }
}
