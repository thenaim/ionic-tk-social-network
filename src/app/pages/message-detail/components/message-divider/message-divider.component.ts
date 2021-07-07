import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-message-divider',
  templateUrl: './message-divider.component.html',
  styleUrls: ['./message-divider.component.scss'],
})
export class MessageDividerComponent implements OnInit {
  @Input() isPageScrolling = false;
  @Input() createdAt: string;

  amCalendarGroup = {
    sameDay: '[Today]',
    lastDay: '[Yesterday]',
    lastWeek: '[Last] dddd',
    sameElse: 'DD-MM-YYYY',
  };
  constructor() {}

  ngOnInit() {}
}
