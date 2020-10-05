import { Component, OnInit } from '@angular/core';
import { ShakeAnimation } from '../../../app.animations';

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
    { area: 'number', number: 1 },
    { area: 'number', number: 2 },
    { area: 'number', number: 3 },
    { area: 'number', number: 4 },
    { area: 'number', number: 5 },
    { area: 'number', number: 6 },
    { area: 'number', number: 7 },
    { area: 'number', number: 8 },
    { area: 'number', number: 9 },
    { area: false },
    { area: 'number', number: 0 },
    { area: 'backspace' },
    { area: false },
    { area: 'finger' },
    { area: false },
  ];

  constructor() { }

  async passwordClick(dig) {
    if (this.pin.length > this.pinLength) {
      return;
    }

    this.pin.push(dig.number);

    if (this.pin.length === this.pinLength) {
      await ShakeAnimation(document.getElementById('shake-animation')).play();
      this.pin = [];
    }
  }

  passwordClear() {
    this.pin.pop();
  }

  fingerPrintActivate() {
    console.log('fingerPrintActivate');
  }

  ngOnInit(): void { }
}
