import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { ForgotPage } from './forgot.page';
import { ForgotPageRoutingModule } from './forgot-routing.module';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, ForgotPageRoutingModule],
  declarations: [ForgotPage],
})
export class ForgotPageModule {}
