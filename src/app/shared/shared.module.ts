import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

/*
 * Other modules
 */
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    TranslateModule
  ],
  declarations: [],
  exports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,

    TranslateModule
  ],
  entryComponents: []
})
export class SharedModule { }
