import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-explore',
  templateUrl: 'explore.page.html',
  styleUrls: ['explore.page.scss']
})
export class ExplorePage implements OnInit {
  explores: any[] = [
    { id: 'friends_title', icon: 'people-outline', color: 'danger', link: 'friends' },
    { id: 'communities_title', icon: 'people-circle', color: 'warning', link: 'communities' },
    { id: 'music_title', icon: 'musical-notes', color: 'primary', link: 'music' },
    { id: 'stickers_title', icon: 'happy-outline', color: 'warning', link: 'stickers' },
    { id: 'videos_title', icon: 'play-circle-outline', color: 'tertiary', link: 'videos' },
    { id: 'live_streams_title', icon: 'ellipse-outline', color: 'warning', link: 'live_streams' },
    { id: 'shopping_title', icon: 'cart-outline', color: 'warning', link: 'shopping' },
    { id: 'podcasts_title', icon: 'headset-outline', color: 'dark', link: 'podcasts' }
  ];

  constructor() { }

  /**
   * On refresh
   */
  doRefresh(event) {
    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 2000);
  }

  ngOnInit(): void {}
}
