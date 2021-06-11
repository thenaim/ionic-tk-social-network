import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
/*
 * Other modules
 */
import { TranslateModule } from '@ngx-translate/core';
import { NgxsFormPluginModule } from '@ngxs/form-plugin';

@NgModule({
  imports: [CommonModule, FormsModule, TranslateModule, NgxsFormPluginModule.forRoot()],
  declarations: [],
  exports: [IonicModule, CommonModule, FormsModule, ReactiveFormsModule, TranslateModule, NgxsFormPluginModule],
  entryComponents: [],
})
export class SharedModule {}
