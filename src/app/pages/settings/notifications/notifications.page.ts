import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.page.html',
  styleUrls: ['./notifications.page.scss'],
})
export class NotificationsPage implements OnInit {
  pages = [
    {
      id: 'messages_title',
      pages: [
        { id: 'private_messages', icon: 'chatbubble', color: 'medium', link: 'private-messages' },
        { id: 'group_chats', icon: 'people', color: 'medium', link: 'group-chats' },
        { id: 'community_messages', icon: 'chatbubbles', color: 'warning', link: 'community-messages' }
      ]
    },
    {
      id: 'sources_of_notifications',
      pages: [
        { id: 'communities_notifications', icon: 'person', color: 'primary', link: 'communities-notifications' }
      ]
    },
    {
      id: 'feedback',
      pages: [
        { id: 'likes', icon: 'heart', color: 'danger', link: 'likes' },
        { id: 'shared', icon: 'arrow-redo', color: 'success', link: 'shared' },
        { id: 'comments', icon: 'chatbox', color: 'success', link: 'comments' },
        { id: 'also_commented', icon: 'communities_notifications', color: 'primary', link: 'also-commented' },
        { id: 'mentions', icon: 'at', color: 'primary', link: 'mentions' },
        { id: 'mentions_messages', icon: 'chatbubble', color: 'success', link: 'mentions-messages' },
        { id: 'posts', icon: 'pencil', color: 'primary', link: 'posts' },
        { id: 'related_you', icon: 'compass', color: 'success', link: 'related-you' },
        { id: 'story_replies', icon: 'arrow-undo', color: 'tertiary', link: 'story-replies' },
        { id: 'story_feedback', icon: 'help', color: 'tertiary', link: 'story-feedback' },
        { id: 'participation_polls', icon: 'stats-chart', color: 'success', link: 'participation-polls' }
      ]
    },
    {
      id: 'events',
      pages: [
        { id: 'friend_requests', icon: 'add', color: 'primary', link: 'friend-requests' },
        { id: 'people_you_may_know', icon: 'person', color: 'primary', link: 'people-you-may-know' },
        { id: 'community_invitations', icon: 'mail', color: 'primary', link: 'community-invitations' },
        { id: 'photo_tags', icon: 'camera', color: 'success', link: 'photo-tags' },
        { id: 'birthdays', icon: 'gift', color: 'danger', link: 'birthdays' },
        { id: 'upcoming_events', icon: 'calendar', color: 'danger', link: 'upcoming-events' },
        { id: 'interesting-posts', icon: 'flame', color: 'danger', link: 'interesting-posts' }
      ]
    },
    {
      id: 'other',
      pages: [
        { id: 'new_post', icon: 'podium', color: 'warning', link: 'new-post' },
        { id: 'closed_community_posts', icon: 'podium', color: 'dark', link: 'closed-community-posts' },
        { id: 'gifts', icon: 'gift', color: 'warning', link: 'gifts' },
        { id: 'aplications', icon: 'game-controller', color: 'primary', link: 'aplications' },
        { id: 'live_streams', icon: 'videocam', color: 'danger', link: 'live-streams' },
        { id: 'podcasts', icon: 'headset', color: 'danger', link: 'podcasts' },
        { id: 'achievements', icon: 'layers', color: 'primary', link: 'achievements' },
        { id: 'services', icon: 'grid', color: 'primary', link: 'services' },
        { id: 'bookmarks', icon: 'bookmark', color: 'warning', link: 'bookmarks' },
        { id: 'store', icon: 'cube', color: 'primary', link: 'store' }
      ]
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
