import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-privacy',
  templateUrl: './privacy.page.html',
  styleUrls: ['./privacy.page.scss'],
})
export class PrivacyPage implements OnInit {
  types: any[] = [
    {
      id: 'myProfile',
      link: 'my-profile',
      pages: [
        { id: 'profile', link: 'profile' },
        { id: 'photos_with', link: 'photos-with' },
        { id: 'photos_saved', link: 'photos-saved' },
        { id: 'groups', link: 'groups' },
        { id: 'audios', link: 'audios' },
        { id: 'gifts', link: 'gifts' },
        { id: 'places', link: 'places' },
        { id: 'friends', link: 'friends' },
        { id: 'hidden_friends', link: 'hidden-friends' },
      ],
    },
    {
      id: 'myPosts',
      link: 'my-posts',
      pages: [
        { id: 'wall', link: 'wall' },
        { id: 'wall_send', link: 'wall-send' },
        { id: 'replies_view', link: 'replies-view' },
        { id: 'status_replies', link: 'status-replies' },
        { id: 'photos_tagme', link: 'photos-tagme' },
      ],
    },
    {
      id: 'whoCanContactMe',
      link: 'can-contact',
      pages: [
        { id: 'mail_send', link: 'mail-send' },
        { id: 'calls', link: 'calls' },
        { id: 'appscall', link: 'appscall' },
        { id: 'groups_invite', link: 'groups-invite' },
        { id: 'apps_invite', link: 'apps-invite' },
        { id: 'friends_requests', link: 'friends-requests' },
        { id: 'chat_invite_user', link: 'chat-invite-user' },
        { id: 'search_by_reg_phone', link: 'search-by-reg-phone' },
      ],
    },
    {
      id: 'stories',
      link: 'stories',
      pages: [
        { id: 'stories', link: 'stories' },
        { id: 'stories_replies', link: 'stories-replies' },
        { id: 'stories_questions', link: 'stories-questions' },
      ],
    },
    {
      id: 'other',
      link: 'other',
      pages: [
        { id: 'search', link: 'search' },
        { id: 'updates', link: 'updates' },
        { id: 'company_messages', link: 'company-messages' },
      ],
    },
  ];
  constructor() {}

  ngOnInit() {}
}
