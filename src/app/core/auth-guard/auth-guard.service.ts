import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Store } from '@ngxs/store';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { appConfig } from '../../app.config';
import { selectIsAuth } from './auth-guard.selectors';

@Injectable({
  providedIn: 'root',
})
export class AuthGuardAfterLoginService implements CanActivate {
  constructor(private store: Store, private navController: NavController) {}

  canActivate(): Observable<boolean> {
    return this.store.select(selectIsAuth()).pipe(
      map((isAuth: boolean) => {
        if (isAuth) {
          return true;
        }
        this.navController.navigateRoot(appConfig.routes.auth.login);
        return false;
      }),
    );
  }
}

@Injectable({
  providedIn: 'root',
})
export class AuthGuardBeforeLoginService implements CanActivate {
  constructor(private store: Store, private navController: NavController) {}

  canActivate(): Observable<boolean> {
    return this.store.select(selectIsAuth()).pipe(
      map((isAuth: boolean) => {
        if (isAuth) {
          this.navController.navigateRoot(appConfig.routes.tabs.root);
          return false;
        }
        return true;
      }),
    );
  }
}
