import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Config, MenuController, ModalController, NavController, AnimationController } from '@ionic/angular';

import { FakerService } from '../../shared/faker/faker.service';
import { AppData } from '../../providers/app-data';
import { StoriesComponent } from '../../shared/stories/stories.component';

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
    private modalController: ModalController,
    private navCtrl: NavController,
    private animationCtrl: AnimationController,

    private appData: AppData,
    private fakerService: FakerService
  ) { }

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
    // modal enter animation
    const enterAnimation = (baseEl: any) => {
      const backdropAnimation = this.animationCtrl.create()
        .addElement(baseEl.querySelector('ion-backdrop')!)
        .fromTo('opacity', '0.01', 'var(--backdrop-opacity)');

      const wrapperAnimation = this.animationCtrl.create()
        .addElement(baseEl.querySelector('.modal-wrapper')!)
        .keyframes([
          { offset: 0, opacity: '0', transform: 'scale(0)' },
          { offset: 1, opacity: '0.99', transform: 'scale(1)' }
        ]);

      return this.animationCtrl.create()
        .addElement(baseEl)
        .easing('ease-out')
        .duration(500)
        .addAnimation([backdropAnimation, wrapperAnimation]);
    }

    // modal leave animation
    const leaveAnimation = (baseEl: any) => {
      const backdropAnimation = this.animationCtrl.create()
        .addElement(baseEl.querySelector('ion-backdrop')!)
        .fromTo('opacity', 'var(--backdrop-opacity)', 0.0);

      const wrapperAnimation = this.animationCtrl.create()
        .addElement(baseEl.querySelectorAll('.modal-wrapper, .modal-shadow')!)
        .beforeStyles({ 'opacity': 1 })
        .fromTo('transform', 'translateY(0vh)', 'translateY(100vh)')
        .fromTo('borderRadius', '0 0 0 0', '30px 30px 0 0')
        .keyframes([
          { offset: 0, transform: 'translateY(0vh)', borderRadius: '0px' },
          { offset: 0.1, borderRadius: '10px' },
          { offset: 1, transform: 'translateY(100vh)', borderRadius: '30px 30px 0 0' }
        ]);

      return this.animationCtrl.create()
        .addElement(baseEl)
        .easing('cubic-bezier(0.32,0.72,0,1)')
        .duration(500)
        .addAnimation([backdropAnimation, wrapperAnimation]);
    }

    // create modal
    const modal = await this.modalController.create({
      component: StoriesComponent,
      mode: 'ios',
      cssClass: 'story-modal',
      swipeToClose: true,
      enterAnimation,
      leaveAnimation
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
  }

  ionViewDidLeave() {
    this.menu.enable(false, 'camera');
  }
}