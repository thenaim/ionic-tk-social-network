import { createSelector } from '@ngxs/store';
import { AuthStateModel } from './auth-guard.models';
import { AuthGuardState } from './auth-guard.state';

export const selectIsAuth = () => createSelector([AuthGuardState], (state: AuthStateModel) => state.isAuth);
export const selectAuthToken = () => createSelector([AuthGuardState], (state: AuthStateModel) => state.accessToken);
