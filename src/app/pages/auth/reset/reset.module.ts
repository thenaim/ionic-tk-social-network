import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { ResetPage } from './reset.page';
import { ResetPageRoutingModule } from './reset-routing.module';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, ResetPageRoutingModule],
  declarations: [ResetPage],
})
export class ResetPageModule {}
