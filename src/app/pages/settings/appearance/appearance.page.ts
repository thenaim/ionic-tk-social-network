import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-appearance',
  templateUrl: './appearance.page.html',
  styleUrls: ['./appearance.page.scss'],
})
export class AppearancePage implements OnInit {
  isDark: FormControl = new FormControl(false);

  theme$: Observable<boolean>;
  subscriptions: Subscription = new Subscription();

  constructor() {}

  ngOnInit() {}

  ionViewDidLeave() {
    this.subscriptions.unsubscribe();
  }
}
