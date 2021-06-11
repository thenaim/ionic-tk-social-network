import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NewsModel } from '../../tabs/main/main.model';
import { UsersStoriesModel } from './users-posts.model';

@Component({
  selector: 'app-users-posts',
  templateUrl: './users-posts.component.html',
  styleUrls: ['./users-posts.component.scss'],
})
export class UsersPostsComponent implements OnInit {
  @Input() post: NewsModel;

  @Output() onOpenStory = new EventEmitter<UsersStoriesModel>();
  constructor() {}

  ngOnInit() {}
}
