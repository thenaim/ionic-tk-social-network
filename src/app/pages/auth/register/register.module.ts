import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { SharedModule } from '../../../shared/shared.module';
import { RegisterPage } from './register.page';
import { RegisterPageRoutingModule } from './register-routing.module';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, RegisterPageRoutingModule, SharedModule],
  declarations: [RegisterPage],
})
export class RegisterPageModule {}
