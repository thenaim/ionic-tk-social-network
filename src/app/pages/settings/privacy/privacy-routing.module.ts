import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppsInviteComponent } from './can-contact/apps-invite/apps-invite.component';
import { AppscallComponent } from './can-contact/appscall/appscall.component';
import { CallsComponent } from './can-contact/calls/calls.component';
import { ChatInviteUserComponent } from './can-contact/chat-invite-user/chat-invite-user.component';
import { FriendsRequestsComponent } from './can-contact/friends-requests/friends-requests.component';
import { GroupsInviteComponent } from './can-contact/groups-invite/groups-invite.component';
import { MailSendComponent } from './can-contact/mail-send/mail-send.component';
import { SearchByRegPhoneComponent } from './can-contact/search-by-reg-phone/search-by-reg-phone.component';
import { PhotosTagmeComponent } from './my-posts/photos-tagme/photos-tagme.component';
import { RepliesViewComponent } from './my-posts/replies-view/replies-view.component';
import { StatusRepliesComponent } from './my-posts/status-replies/status-replies.component';
import { WallSendComponent } from './my-posts/wall-send/wall-send.component';
import { WallComponent } from './my-posts/wall/wall.component';
import { AudiosComponent } from './my-profile/audios/audios.component';
import { FriendsComponent } from './my-profile/friends/friends.component';
import { GiftsComponent } from './my-profile/gifts/gifts.component';
import { GroupsComponent } from './my-profile/groups/groups.component';
import { HiddenFriendsComponent } from './my-profile/hidden-friends/hidden-friends.component';
import { PhotosSavedComponent } from './my-profile/photos-saved/photos-saved.component';
import { PhotosWithComponent } from './my-profile/photos-with/photos-with.component';
import { PlacesComponent } from './my-profile/places/places.component';
import { ProfileComponent } from './my-profile/profile/profile.component';
import { CompanyMessagesComponent } from './other/company-messages/company-messages.component';
import { SearchComponent } from './other/search/search.component';
import { UpdatesComponent } from './other/updates/updates.component';

import { PrivacyPage } from './privacy.page';
import { StoriesQuestionsComponent } from './stories/stories-questions/stories-questions.component';
import { StoriesRepliesComponent } from './stories/stories-replies/stories-replies.component';
import { StoriesComponent } from './stories/stories/stories.component';

const routes: Routes = [
  {
    path: '',
    component: PrivacyPage,
  },
  {
    path: 'can-contact/apps-invite',
    component: AppsInviteComponent,
  },
  {
    path: 'can-contact/appscall',
    component: AppscallComponent,
  },
  {
    path: 'can-contact/calls',
    component: CallsComponent,
  },
  {
    path: 'can-contact/chat-invite-user',
    component: ChatInviteUserComponent,
  },
  {
    path: 'can-contact/friends-requests',
    component: FriendsRequestsComponent,
  },
  {
    path: 'can-contact/groups-invite',
    component: GroupsInviteComponent,
  },
  {
    path: 'can-contact/mail-send',
    component: MailSendComponent,
  },
  {
    path: 'can-contact/search-by-reg-phone',
    component: SearchByRegPhoneComponent,
  },
  {
    path: 'my-posts/photo-tagme',
    component: PhotosTagmeComponent,
  },
  {
    path: 'my-posts/replies-view',
    component: RepliesViewComponent,
  },
  {
    path: 'my-posts/status-replies',
    component: StatusRepliesComponent,
  },
  {
    path: 'my-posts/wall',
    component: WallComponent,
  },
  {
    path: 'my-posts/wall-send',
    component: WallSendComponent,
  },
  {
    path: 'my-profile/audios',
    component: AudiosComponent,
  },
  {
    path: 'my-profile/friends',
    component: FriendsComponent,
  },
  {
    path: 'my-profile/gifts',
    component: GiftsComponent,
  },
  {
    path: 'my-profile/groups',
    component: GroupsComponent,
  },
  {
    path: 'my-profile/hidden-friends',
    component: HiddenFriendsComponent,
  },
  {
    path: 'my-profile/photos-saved',
    component: PhotosSavedComponent,
  },
  {
    path: 'my-profile/photos-with',
    component: PhotosWithComponent,
  },
  {
    path: 'my-profile/places',
    component: PlacesComponent,
  },
  {
    path: 'my-profile/profile',
    component: ProfileComponent,
  },
  {
    path: 'other/company-messages',
    component: CompanyMessagesComponent,
  },
  {
    path: 'other/search',
    component: SearchComponent,
  },
  {
    path: 'other/updates',
    component: UpdatesComponent,
  },
  {
    path: 'stories/stories',
    component: StoriesComponent,
  },
  {
    path: 'stories/stories-questions',
    component: StoriesQuestionsComponent,
  },
  {
    path: 'stories/stories-replies',
    component: StoriesRepliesComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PrivacyPageRoutingModule {}
