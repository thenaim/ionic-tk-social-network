import { Component, OnInit } from '@angular/core';
import { shakeAnimation } from './auth-pin.animation';

@Component({
  selector: 'app-auth-pin',
  templateUrl: './auth-pin.page.html',
  styleUrls: ['./auth-pin.page.scss'],
})
export class AuthPinPage implements OnInit {
  pinLength = 6;
  pinRange = Array(this.pinLength).fill(undefined);
  pin: number[] = [];
  fingerPrintAvailable = true;

  digits: any[] = [
    { area: 'number', pin: 1 },
    { area: 'number', pin: 2 },
    { area: 'number', pin: 3 },
    { area: 'number', pin: 4 },
    { area: 'number', pin: 5 },
    { area: 'number', pin: 6 },
    { area: 'number', pin: 7 },
    { area: 'number', pin: 8 },
    { area: 'number', pin: 9 },
    { area: false },
    { area: 'number', pin: 0 },
    { area: 'backspace' },
    { area: false },
    { area: 'finger' },
    { area: false },
  ];

  constructor() {}

  async passwordClick(dig) {
    if (this.pin.length > this.pinLength) {
      return;
    }

    this.pin.push(dig.pin);

    if (this.pin.length === this.pinLength) {
      await shakeAnimation(document.getElementById('shake-animation')).play();
      this.pin = [];
    }
  }

  passwordClear() {
    this.pin.pop();
  }

  fingerPrintActivate() {
    console.log('fingerPrintActivate');
  }

  ngOnInit(): void {}
}
