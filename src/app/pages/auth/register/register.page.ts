import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  register: FormGroup = new FormGroup(
    {
      firstName: new FormControl('', [Validators.required, Validators.maxLength(150)]),
      lastName: new FormControl('', [Validators.required, Validators.maxLength(150)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(150)]),
      passwordConfirm: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(150)]),
    },
    { validators: this.passwordConfirmMatchValidator },
  );

  constructor() {}

  onRegister() {
    if (this.register.valid) {
      console.log(this.register.value);
    }
  }

  ngOnInit(): void {}

  passwordConfirmMatchValidator(g: AbstractControl): ValidationErrors | null {
    const password = g.get('password');
    const passwordConfirm = g.get('passwordConfirm');

    if (passwordConfirm.hasError('required') || passwordConfirm.hasError('minlength')) {
      return;
    }

    if (password.value !== passwordConfirm.value) {
      passwordConfirm.setErrors({
        mismatch: true,
      });
    } else {
      passwordConfirm.setErrors(null);
    }
  }
}
