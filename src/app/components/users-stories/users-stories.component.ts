import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UsersStoriesModel } from './users-stories.model';

@Component({
  selector: 'app-users-stories',
  templateUrl: './users-stories.component.html',
  styleUrls: ['./users-stories.component.scss'],
})
export class UsersStoriesComponent implements OnInit {
  @Input() isLoading = true;
  @Input() stories: UsersStoriesModel[];

  @Output() onOpenStory = new EventEmitter<UsersStoriesModel>();
  constructor() {}

  openStory(event: Event, story: UsersStoriesModel) {
    this.onOpenStory.emit(story);
  }

  trackByStory(index) {
    return index;
  }

  ngOnInit() {}
}
