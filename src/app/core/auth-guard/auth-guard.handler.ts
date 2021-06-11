import { Injectable } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Actions, ofActionDispatched } from '@ngxs/store';
import { appConfig } from '../../app.config';
import { AuthStateModel } from './auth-guard.models';
import { AuthAction } from './auth-guard.actions';

@Injectable({ providedIn: 'root' })
export class AuthHandler {
  constructor(private actions$: Actions, private navController: NavController) {
    this.actions$.pipe(ofActionDispatched(AuthAction.Login, AuthAction.Logout)).subscribe((auth: AuthStateModel) => {
      if (auth.isAuth) {
        this.navController.navigateRoot(appConfig.routes.tabs.root);
        return;
      }
      this.navController.navigateRoot(appConfig.routes.auth.login);
    });
  }
}
