import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Config, MenuController } from '@ionic/angular';

import { FakerService } from '../../shared/faker/faker.service';
import { AppData } from 'src/app/providers/app-data';

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

  constructor(
    private config: Config,
    private menu: MenuController,

    private appData: AppData,
    private fakerService: FakerService
  ) { }

  doRefresh(event) {
    this.dataInit();

    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 1000);
  }

  toggleMenu() {
    this.menu.toggle('camera');
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
  }

  ionViewDidLeave() {
    this.menu.enable(false, 'camera');
  }
}