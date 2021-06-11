import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NavController, Platform } from '@ionic/angular';
import { Store } from '@ngxs/store';
import { AuthAction } from '../../../core/auth-guard/auth-guard.actions';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  login: FormGroup;

  constructor(private store: Store, private navController: NavController, private platform: Platform) {}

  onAuth() {
    this.store.dispatch(new AuthAction.Login());
  }

  onLogin() {
    if (this.login.valid) {
      console.log(this.login.value);
    }
  }

  ngOnInit(): void {
    this.login = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(150)]),
    });
  }
}
