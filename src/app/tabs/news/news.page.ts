import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Config, MenuController } from '@ionic/angular';

import { FakerService } from '../../shared/faker/faker.service';
import { MusicController } from '../../shared/music-controller/music-controller.service';

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

  musics: any[] = [
    { id: '6545421321', author: 'Silent Partner', song: 'Blue Skies' },
    { id: '7854235678', author: 'Kevin MacLeod', song: 'Life of Riley' },
    { id: '5612785349', author: 'Kevin MacLeod', song: 'Sneaky Snitch' }
  ];

  isIos: boolean;

  constructor(
    private config: Config,
    private menu: MenuController,

    private fakerService: FakerService,
    private musicController: MusicController
  ) { }

  doRefresh(event) {
    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 2000);
  }

  toggleMenu() {
    this.menu.toggle('camera');
  }

  playMusic() {
    this.musicController.playMusic(this.musics[2]);
  }

  ngOnInit(): void {
    this.isIos = this.config.get('mode') === 'ios';

    this.fakerService.getFaker().then((faker) => {
      this.stories = Array.apply(null, Array(10)).map(() => {
        return {
          id: faker.random.uuid(),
          first_name: faker.name.firstName(),
          last_name: faker.name.lastName(),
          image: faker.image.avatar()
        };
      });

      this.posts = Array.apply(null, Array(10)).map(() => {
        return {
          id: faker.random.uuid(),
          first_name: faker.name.firstName(),
          last_name: faker.name.lastName(),
          image: faker.image.avatar(),
          content: faker.lorem.sentences(),
          likes: faker.random.number(100),
          comments: faker.random.number(100),
          shared: faker.random.number(100)
        };
      });
    });
  }

  ionViewDidEnter() {
    this.menu.enable(true, 'camera');
  }

  ionViewDidLeave() {
    this.menu.enable(false, 'camera');
  }
}
