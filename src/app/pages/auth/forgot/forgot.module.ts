import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { SharedModule } from '../../../shared/shared.module';
import { ForgotPage } from './forgot.page';
import { ForgotPageRoutingModule } from './forgot-routing.module';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, ForgotPageRoutingModule, SharedModule],
  declarations: [ForgotPage],
})
export class ForgotPageModule {}
