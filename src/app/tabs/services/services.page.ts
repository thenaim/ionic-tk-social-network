import { Component, OnInit, ViewChild } from '@angular/core';
import { IonContent, NavController } from '@ionic/angular';
import { Store } from '@ngxs/store';

@Component({
  selector: 'app-services',
  templateUrl: 'services.page.html',
  styleUrls: ['services.page.scss'],
})
export class ServicesPage implements OnInit {
  @ViewChild(IonContent) ionContent: IonContent;

  explores: any[] = [
    { id: 'friends_title', icon: 'people-outline', color: 'danger', link: 'friends' },
    { id: 'communities_title', icon: 'people-circle', color: 'warning', link: 'communities' },
    { id: 'music_title', icon: 'musical-notes', color: 'primary', link: 'music' },
    { id: 'stickers_title', icon: 'happy-outline', color: 'warning', link: 'stickers' },
    { id: 'videos_title', icon: 'play-circle-outline', color: 'tertiary', link: 'videos' },
    { id: 'live_streams_title', icon: 'ellipse-outline', color: 'warning', link: 'live_streams' },
    { id: 'shopping_title', icon: 'cart-outline', color: 'warning', link: 'shopping' },
    { id: 'podcasts_title', icon: 'headset-outline', color: 'dark', link: 'podcasts' },
  ];

  constructor(private store: Store, private navController: NavController) {}

  openServicePage(explore) {
    this.navController.navigateForward(explore.link);
  }

  async ngOnInit() {}

  ionViewDidEnter() {}

  ionViewDidLeave() {}
}
