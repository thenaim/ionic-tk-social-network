import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.page.html',
  styleUrls: ['./forgot.page.scss'],
})
export class ForgotPage implements OnInit {
  forgot: FormControl;

  constructor() {}

  done() {
    if (this.forgot.valid) {
      console.log(this.forgot.value);
    }
  }

  ngOnInit() {
    this.forgot = new FormControl('', [Validators.required, Validators.email]);
  }
}
