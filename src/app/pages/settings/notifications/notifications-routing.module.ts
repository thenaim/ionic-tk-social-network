import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NotificationsPage } from './notifications.page';
import { PrivateMessagesComponent } from './messages/private-messages/private-messages.component';
import { GroupChatsComponent } from './messages/group-chats/group-chats.component';
import { CommunityMessagesComponent } from './messages/community-messages/community-messages.component';

import { CommunitiesNotificationsComponent } from './sources/communities-notifications/communities-notifications.component';

import { LikesComponent } from './feedback/likes/likes.component';
import { SharedComponent } from './feedback/shared/shared.component';
import { CommentsComponent } from './feedback/comments/comments.component';
import { AlsoCommentedComponent } from './feedback/also-commented/also-commented.component';
import { MentionsComponent } from './feedback/mentions/mentions.component';
import { MentionsMessagesComponent } from './feedback/mentions-messages/mentions-messages.component';
import { PostsComponent } from './feedback/posts/posts.component';
import { RelatedYouComponent } from './feedback/related-you/related-you.component';
import { StoryRepliesComponent } from './feedback/story-replies/story-replies.component';
import { StoryFeedbackComponent } from './feedback/story-feedback/story-feedback.component';
import { ParticipationPollsComponent } from './feedback/participation-polls/participation-polls.component';
import { FriendRequestsComponent } from './events/friend-requests/friend-requests.component';
import { PeopleYouMayKnowComponent } from './events/people-you-may-know/people-you-may-know.component';
import { CommunityInvitationsComponent } from './events/community-invitations/community-invitations.component';
import { PhotoTagsComponent } from './events/photo-tags/photo-tags.component';
import { BirthdaysComponent } from './events/birthdays/birthdays.component';
import { UpcomingEventsComponent } from './events/upcoming-events/upcoming-events.component';
import { InterestingPostsComponent } from './events/interesting-posts/interesting-posts.component';

import { NewPostComponent } from './other/new-post/new-post.component';
import { ClosedCommunityPostsComponent } from './other/closed-community-posts/closed-community-posts.component';
import { GiftsComponent } from './other/gifts/gifts.component';
import { AplicationsComponent } from './other/aplications/aplications.component';
import { LiveStreamsComponent } from './other/live-streams/live-streams.component';
import { PodcastsComponent } from './other/podcasts/podcasts.component';
import { AchievementsComponent } from './other/achievements/achievements.component';
import { ServicesComponent } from './other/services/services.component';
import { BookmarksComponent } from './other/bookmarks/bookmarks.component';
import { StoreComponent } from './other/store/store.component';

const pagesDeclarations = [
  NotificationsPage,

  PrivateMessagesComponent,
  GroupChatsComponent,
  CommunityMessagesComponent,

  CommunitiesNotificationsComponent,

  LikesComponent,
  SharedComponent,
  CommentsComponent,
  AlsoCommentedComponent,
  MentionsComponent,
  MentionsMessagesComponent,
  PostsComponent,
  RelatedYouComponent,
  StoryRepliesComponent,
  StoryFeedbackComponent,
  ParticipationPollsComponent,
  FriendRequestsComponent,
  PeopleYouMayKnowComponent,
  CommunityInvitationsComponent,
  PhotoTagsComponent,
  BirthdaysComponent,
  UpcomingEventsComponent,
  InterestingPostsComponent,

  NewPostComponent,
  ClosedCommunityPostsComponent,
  GiftsComponent,
  AplicationsComponent,
  LiveStreamsComponent,
  PodcastsComponent,
  AchievementsComponent,
  ServicesComponent,
  BookmarksComponent,
  StoreComponent
];

const routes: Routes = [
  { path: '', component: NotificationsPage },
  { path: 'private-messages', component: PrivateMessagesComponent },
  { path: 'group-chats', component: GroupChatsComponent },
  { path: 'community-messages', component: CommunityMessagesComponent },

  { path: 'communities-notifications', component: CommunitiesNotificationsComponent },

  { path: 'likes', component: LikesComponent },
  { path: 'shared', component: SharedComponent },
  { path: 'comments', component: CommentsComponent },
  { path: 'also-commented', component: AlsoCommentedComponent },
  { path: 'mentions', component: MentionsComponent },
  { path: 'mentions-messages', component: MentionsMessagesComponent },
  { path: 'posts', component: PostsComponent },
  { path: 'related-you', component: RelatedYouComponent },
  { path: 'story-replies', component: StoryRepliesComponent },
  { path: 'story-feedback', component: StoryFeedbackComponent },
  { path: 'participation-polls', component: ParticipationPollsComponent },

  { path: 'friend-requests', component: FriendRequestsComponent },
  { path: 'people-you-may-know', component: PeopleYouMayKnowComponent },
  { path: 'community-invitations', component: CommunityInvitationsComponent },
  { path: 'photo-tags', component: PhotoTagsComponent },
  { path: 'birthdays', component: BirthdaysComponent },
  { path: 'upcoming-events', component: UpcomingEventsComponent },
  { path: 'interesting-posts', component: InterestingPostsComponent },

  { path: 'new-post', component: NewPostComponent },
  { path: 'closed-community-posts', component: ClosedCommunityPostsComponent },
  { path: 'gifts', component: GiftsComponent },
  { path: 'aplications', component: AplicationsComponent },
  { path: 'live-streams', component: LiveStreamsComponent },
  { path: 'podcasts', component: PodcastsComponent },
  { path: 'achievements', component: AchievementsComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'bookmarks', component: BookmarksComponent },
  { path: 'store', component: StoreComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NotificationsPageRoutingModule { }
