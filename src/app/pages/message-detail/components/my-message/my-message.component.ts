import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-message',
  templateUrl: './my-message.component.html',
  styleUrls: ['./my-message.component.scss'],
})
export class MyMessageComponent implements OnInit {
  @Input() message: string;
  @Input() createdAt: string;

  constructor() {}

  ngOnInit() {}
}
