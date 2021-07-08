import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
/*
 * Other modules
 */
import { TranslateModule } from '@ngx-translate/core';
import { NgxsFormPluginModule } from '@ngxs/form-plugin';
import { MomentModule } from 'ngx-moment';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    TranslateModule,
    /* NGX MOMENT */
    MomentModule,
  ],
  declarations: [],
  exports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    TranslateModule,
    NgxsFormPluginModule,
    /* NGX MOMENT */
    MomentModule,
  ],
  entryComponents: [],
})
export class SharedModule {}
