import { Component, OnInit, ViewChild, Renderer2, ElementRef } from '@angular/core';
import { IonSlides, ModalController } from '@ionic/angular';
import { Subject, SubscriptionLike } from 'rxjs';
import analyze from 'rgbaster'

import { storyCubeOptions } from './storyOptions';
import { AppData } from '../../providers/app-data';

export interface StoryProgressTimerInterface {
  type: 'video' | 'image';
  timer: number;
  story: number;
  storyIndex: number;
};

export interface StoryProgressInterface {
  type: 'video' | 'image';
  progress: number;
  story: number;
  storyIndex: number;
};

@Component({
  selector: 'app-stories',
  templateUrl: './stories.component.html',
  styleUrls: ['./stories.component.scss'],
})
export class StoriesComponent implements OnInit {
  @ViewChild('story', { static: false }) storyElement: ElementRef;
  @ViewChild('story', { static: false }) story: IonSlides;

  showSlide = false;
  storyCubeOptions = storyCubeOptions;

  activeStoryOption = {
    activeStory: 0,
    activeStoryIndex: 0,
    storyActiveColor: '#fff',
    storyTap: false
  };

  stories: any[] = [];

  public progress: Subject<StoryProgressTimerInterface> = new Subject();
  private playerSubscriptions: SubscriptionLike[] = [];
  private storyEventListner: () => void;
  constructor(
    private renderer2: Renderer2,
    private appData: AppData,
    private modalCtrl: ModalController,
  ) { }

  /*
  * Close story modal
  */
  closeModal(event) {
    event.stopPropagation();
    event.preventDefault();

    this.modalCtrl.dismiss({
      'dismissed': true
    });
  }

  /*
  * Add story share
  */
  addStory(event) {
    event.stopPropagation();
    event.preventDefault();

  }

  /*
  * Share story
  */
  shareStory(event) {
    event.stopPropagation();
    event.preventDefault();

  }

  /*
  * Story options
  */
  storyOptions(event) {
    event.stopPropagation();
    event.preventDefault();

  }

  //Move to Next slide
  slideNext(event: Event) {
    // event.stopPropagation();
    // event.preventDefault();

  }

  //Move to previous slide
  slidePrev(event: Event) {
    event.stopPropagation();
    // event.preventDefault();

  }

  slideDidLoad(event) {
    console.log('slideDidLoad');
    this.story.update();
  }

  slideDidChange(event) {
    console.log('DidChange');
  }

  slideWillChange(event) {
    console.log('WillChange');
  }

  slideTap(event) {
    console.log('Tap');
  }

  storyTouchStart(event: any) {
    const target = event.target || event.srcElement;
    const id = target.id.replace(/[0-9]/g, '');
    // const allowElement = ['story-image-'];
    const ignoreElement = ['ion-avatar', 'ion-text', 'ion-progress-bar', 'ion-button'];
    // const ignoreElementId = ['ion-text', 'ion-button'];

    if (ignoreElement.includes(target.localName) || target.id === 'avatar') return;

    this.stories[this.activeStoryOption.activeStory].items[this.activeStoryOption.activeStory].tap = true;

    console.log('storyTouchStart');
  }

  storyTouchEnd(event) {
    this.stories[this.activeStoryOption.activeStory].items[this.activeStoryOption.activeStory].tap = false;

    this.story.getActiveIndex().then(index => {
      // Prev
      if (index < this.activeStoryOption.activeStory) {
        this.activeStoryOption.activeStory = index;
      }

      // Next
      if (index > this.activeStoryOption.activeStory) {
        this.activeStoryOption.activeStory = index;
      }
    });

    console.log('storyTouchEnd');
  }

  slidePrevEnd(event) {
    console.log('slidePrevEnd');
    setTimeout(() => {

      this.activeStoryOption.activeStory -= this.activeStoryOption.activeStory;
    }, 100);
  }

  slideNextEnd(event) {
    console.log('slideNextEnd');
    this.activeStoryOption.activeStory += this.activeStoryOption.activeStory;
  }

  async getColor(url: string) {
    const result = await analyze(url, { scale: 0.5 });

    return result[0].color;
  }

  async imageLoaded(event, contentIndex) {
    if (event && event.target) {
      const slideImg: any = document.getElementById('story-image-' + contentIndex);

      // this.activeStoryOption.storyActiveColor = await this.getColor(slideImg.src);
    }
  }

  async modalWillDismiss() {
    return (await this.modalCtrl.getTop()).onWillDismiss();
  }

  async storyDataInit() {
    this.stories = await this.appData.getStoriesList();
  }

  ngOnInit() {
    this.storyDataInit();

    this.modalWillDismiss().then(() => {
      console.log('modalWillDismiss');
    });
  }

  ionViewDidEnter() {
    this.storyEventListner = this.renderer2.listen(document.querySelector('ion-slides'), 'touchstart', (event) => {
      // TouchEnd
      const onTouchEnd = () => {
        event.target.removeEventListener("touchend", onTouchEnd);
        this.storyTouchEnd(event);
      };
      event.target.addEventListener("touchend", onTouchEnd);

      // TouchStart
      this.storyTouchStart(event);
    });

  }

  ngOnDestroy(): void {
    this.activeStoryOption.storyActiveColor = '#fff';

    if (this.storyEventListner) {
      this.storyEventListner();
    }
  }

}
