import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../../../shared/shared.module';
import { PrivacyPageRoutingModule } from './privacy-routing.module';

import { PrivacyPage } from './privacy.page';
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
import { StoriesQuestionsComponent } from './stories/stories-questions/stories-questions.component';
import { StoriesRepliesComponent } from './stories/stories-replies/stories-replies.component';
import { StoriesComponent } from './stories/stories/stories.component';

@NgModule({
  imports: [CommonModule, PrivacyPageRoutingModule, SharedModule],
  declarations: [
    PrivacyPage,

    /* Can contact */
    AppsInviteComponent,
    AppscallComponent,
    CallsComponent,
    ChatInviteUserComponent,
    FriendsRequestsComponent,
    GroupsInviteComponent,
    MailSendComponent,
    SearchByRegPhoneComponent,

    /* My posts */
    PhotosTagmeComponent,
    RepliesViewComponent,
    StatusRepliesComponent,
    WallComponent,
    WallSendComponent,

    /* My profile */
    AudiosComponent,
    FriendsComponent,
    GiftsComponent,
    GroupsComponent,
    HiddenFriendsComponent,
    PhotosSavedComponent,
    PhotosWithComponent,
    PlacesComponent,
    ProfileComponent,

    /* Other */
    CompanyMessagesComponent,
    SearchComponent,
    UpdatesComponent,

    /* Stories */
    StoriesComponent,
    StoriesQuestionsComponent,
    StoriesRepliesComponent,
  ],
})
export class PrivacyPageModule {}
