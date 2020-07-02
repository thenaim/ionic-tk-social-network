import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-music',
  templateUrl: './music.page.html',
  styleUrls: ['./music.page.scss'],
})
export class MusicPage implements OnInit {

  searchMusic: FormControl = new FormControl('');
  activeSegment: FormControl = new FormControl('my_music');
  constructor() { }

  ngOnInit() {
  }

}
