import { createSelector } from '@ngxs/store';
import { AuthStateModel } from './auth-guard.models';

export class AuthGuardSelectors {
  static isAuth(stateClass) {
    return createSelector([stateClass], (state: AuthStateModel) => state.isAuth);
  }

  static authToken(stateClass) {
    return createSelector([stateClass], (state: AuthStateModel) => state.accessToken);
  }
}
