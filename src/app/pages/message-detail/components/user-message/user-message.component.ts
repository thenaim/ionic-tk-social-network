import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-message',
  templateUrl: './user-message.component.html',
  styleUrls: ['./user-message.component.scss'],
})
export class UserMessageComponent implements OnInit {
  @Input() isLastMessage: boolean;
  @Input() isLastUserMessage: boolean;
  @Input() userAvatar: string;
  @Input() message: string;
  @Input() createdAt: string;

  constructor() {}

  ngOnInit() {}
}
