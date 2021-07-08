import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../../../shared/shared.module';
import { SecurityPageRoutingModule } from './security-routing.module';

import { SecurityPage } from './security.page';

@NgModule({
  imports: [CommonModule, SecurityPageRoutingModule, SharedModule],
  declarations: [SecurityPage],
})
export class SecurityPageModule {}
