import {Component, OnInit} from '@angular/core';
import { FormControl } from '@angular/forms';
import { Config } from '@ionic/angular';

@Component({
  selector: 'app-notification',
  templateUrl: 'notification.page.html',
  styleUrls: ['notification.page.scss']
})
export class NotificationPage implements OnInit {
  activeSegment: FormControl = new FormControl('feedback');
  segments: any[] = [
    { title: 'Feedback', value: 'feedback' },
    { title: 'Comments', value: 'comments' }
  ];

  isIos: boolean;

  constructor(
    public config: Config
  ) {}

  ngOnInit(): void {
    this.isIos = this.config.get('mode') === 'ios';
  }
}
