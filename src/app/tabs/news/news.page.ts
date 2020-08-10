import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SubscriptionLike } from 'rxjs';
import { Config, MenuController, ModalController } from '@ionic/angular';
import { StoryModalEnterAnimation, StoryModalLeaveAnimation } from '../../app.animations';

import { AppData } from '../../providers/app-data';
import { StoriesComponent } from '../../shared/components/stories/stories.component';

@Component({
  selector: 'app-news',
  templateUrl: 'news.page.html',
  styleUrls: ['news.page.scss']
})
export class NewsPage {
  stories: any[] = [];
  posts: any[] = [];
  activeSegment: FormControl = new FormControl('news');
  segments: any[] = [
    { title: 'News', value: 'news' },
    { title: 'Discover', value: 'discover' }
  ];

  activeDiscover: FormControl = new FormControl('for_you');
  discoverCategories: any[] = [
    { id: 'for_you' },
    { id: 'games' },
    { id: 'sports' },
    { id: 'it' },
    { id: 'photos' },
    { id: 'movies' },
    { id: 'travel' },
    { id: 'music' }
  ];
  discavery = [];

  isIos: boolean;

  private subscriptions: SubscriptionLike[] = [];
  constructor(
    private config: Config,
    private menu: MenuController,
    private modalController: ModalController,
    private router: Router,
    private route: ActivatedRoute,

    private appData: AppData
  ) {
    const tabParam = this.route.snapshot.queryParamMap.get('tab');
    if (this.segments.findIndex(x => x.value === tabParam) >= 0) {
      this.activeSegment.setValue(tabParam);
    }
  }

  /**
  * On refresh
  */
  doRefresh(event) {
    this.dataInit();

    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 1000);
  }

  /**
  * Toggle camera side
  */
  toggleMenu() {
    this.menu.toggle('camera');
  }

  /**
  * Open story modal
  */
  async openStory(event) {
    const modal = await this.modalController.create({
      component: StoriesComponent,
      mode: 'ios',
      cssClass: 'story-modal',
      swipeToClose: true,
      enterAnimation: StoryModalEnterAnimation,
      leaveAnimation: StoryModalLeaveAnimation,
      // presentingElement: this.routerOutlet.nativeEl
    });
    return await modal.present();
  }

  async dataInit() {
    this.stories = await this.appData.getStories();
    this.posts = await this.appData.getPosts();
    this.discavery = await this.appData.getDiscavery();
  }

  ngOnInit(): void {
    this.isIos = this.config.get('mode') === 'ios';
    this.dataInit();
  }

  ionViewDidEnter() {
    this.menu.enable(true, 'camera');
    this.subscriptions.push(
      this.activeSegment.valueChanges.subscribe((res) => {
        this.router.navigate([], {
          queryParams: {
            tab: res
          },
          queryParamsHandling: 'merge',
        });
      })
    );
  }

  ionViewDidLeave() {
    this.menu.enable(false, 'camera');

    this.subscriptions.forEach(subscription => subscription.unsubscribe());
    this.subscriptions = [];
  }
}