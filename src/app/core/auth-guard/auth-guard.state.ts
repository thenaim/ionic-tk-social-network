import { Injectable } from '@angular/core';
import { Action, State, StateContext } from '@ngxs/store';
import { AuthAction } from './auth-guard.actions';
import { AuthStateModel } from './auth-guard.models';

export const initialState: AuthStateModel = {
  isAuth: false,
  accessToken: '',
  refreshToken: '',
};

@State<AuthStateModel>({
  name: 'auth',
  defaults: initialState,
})
@Injectable()
export class AuthGuardState {
  @Action(AuthAction.Login)
  login(context: StateContext<AuthAction.Login>, action: AuthAction.Login) {
    const state = context.getState();
    context.setState({
      ...state,
      ...action,
    });
  }

  @Action(AuthAction.Logout)
  logout(context: StateContext<AuthAction.Logout>) {
    const state = context.getState();
    context.setState({
      ...state,
      isAuth: false,
    });
  }
}
