import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

/*
 * Other modules
 */
import { TranslateModule } from '@ngx-translate/core';
import { MusicPlayerComponent } from './music-player/music-player.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    TranslateModule
  ],
  declarations: [
    MusicPlayerComponent
  ],
  exports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,

    TranslateModule,
  ],
  entryComponents: [
    MusicPlayerComponent
  ]
})
export class SharedModule { }
