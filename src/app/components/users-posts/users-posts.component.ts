import { Component, Input, OnInit } from '@angular/core';
import { NewsModel } from '../../tabs/main/main.model';

@Component({
  selector: 'app-users-posts',
  templateUrl: './users-posts.component.html',
  styleUrls: ['./users-posts.component.scss'],
})
export class UsersPostsComponent implements OnInit {
  @Input() post: NewsModel;

  constructor() {}

  ngOnInit() {}
}
