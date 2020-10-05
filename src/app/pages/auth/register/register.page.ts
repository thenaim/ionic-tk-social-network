import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  register: FormGroup;

  constructor(
    private fb: FormBuilder
  ) { }

  onRegister() {
    if (this.register.valid) {
      console.log(this.register.value);
    }
  }

  ngOnInit(): void {
    this.register = this.fb.group({
      first_name: this.fb.control('', [
        Validators.required,
        Validators.maxLength(150)
      ]),
      last_name: this.fb.control('', [
        Validators.required,
        Validators.maxLength(150)
      ]),
      email: this.fb.control('', [
        Validators.required,
        Validators.email
      ]),
      password: this.fb.control('', [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(150)
      ]),
      password_confirm: this.fb.control('', [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(150)
      ])
    }, {
      validators: this.passwordConfirmMatchValidator
    });
  }

  passwordConfirmMatchValidator(g: FormGroup) {
    const password = g.get('password');
    const passwordConfirm = g.get('password_confirm');

    if (passwordConfirm.hasError('required') || passwordConfirm.hasError('minlength')) { return; }

    if (password.value !== passwordConfirm.value) {
      passwordConfirm.setErrors({
        mismatch: true
      });
    } else {
      passwordConfirm.setErrors(null);
    }
  }
}
