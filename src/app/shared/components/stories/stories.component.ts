import { Component, OnInit, OnDestroy, ViewChild, Renderer2, ElementRef } from '@angular/core';
import { IonSlides, ModalController } from '@ionic/angular';
import { Subject, SubscriptionLike } from 'rxjs';
import analyze from 'rgbaster';

import { storyCubeOptions } from './storyOptions';
import { AppData } from '../../../providers/app-data';

export interface StoryProgressTimerInterface {
  type: 'video' | 'image';
  timer: number;
  story: number;
  storyIndex: number;
}

export interface StoryProgressInterface {
  type: 'video' | 'image';
  progress: number;
  story: number;
  storyIndex: number;
}

@Component({
  selector: 'app-stories',
  templateUrl: './stories.component.html',
  styleUrls: ['./stories.component.scss'],
})
export class StoriesComponent implements OnInit, OnDestroy {
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

  /**
   * Close story modal
   */
  closeModal(event) {
    event.stopPropagation();
    event.preventDefault();

    this.modalCtrl.dismiss({
      dismissed: true
    });
  }

  /**
   * Add story share clicked
   */
  addStory(event) {
    console.log('story add button');
  }

  /**
   * Share story clicked
   */
  shareStory(event) {
    console.log('story share button');
  }

  /**
   * Story options clicked
   */
  storyOptions(event) {
    console.log('story options button');
  }

  /**
   * When story load event
   */
  storyDidLoad(event) {
    this.story.update();
    console.log('storyDidLoad');
  }

  /**
   * Story touchstart event
   */
  storyTouchStart(event: any) {
    console.log('storyTouchStart', event.target.localName);
    const target = event.target || event.srcElement;
    const ignoreElement = ['ion-avatar', 'ion-text', 'ion-button'];
    if (ignoreElement.includes(target.localName) || target.id === 'avatar') { return; }

    this.stories[this.activeStoryOption.activeStory].items[this.activeStoryOption.activeStoryIndex].tap = true;
  }

  /**
   * Story touchend event
   */
  storyTouchEnd(event) {
    this.stories[this.activeStoryOption.activeStory].items[this.activeStoryOption.activeStoryIndex].tap = false;

    this.story.getActiveIndex().then(async (index) => {
      // Prev
      if (index < this.activeStoryOption.activeStory) {
        this.activeStoryOption.activeStory = index;
      }
      // Next
      if (index > this.activeStoryOption.activeStory) {
        this.activeStoryOption.activeStory = index;
      }
    });
  }

  /**
   * Get image dominant color for background
   * @param {string} url - image url
   * @promise {Promise}
   */
  async getColor(url: string): Promise<string> {
    const result = await analyze(url, { scale: 0.5 });

    return result[0].color;
  }

  /**
   * Image loaded event
   * @param {Event} event - event
   * @param {number} contentIndex - content index
   */
  imageLoaded(event: Event, contentIndex: number) {
    console.log('imageLoaded');
    // const slideImg: any = document.getElementById('story-image-' + contentIndex);
    // this.getColor(slideImg.src).then((res => {
    //  this.activeStoryOption.storyActiveColor = res;
    // }));
  }

  /**
   * Modal dismiss event
   */
  async modalWillDismiss() {
    return (await this.modalCtrl.getTop()).onWillDismiss();
  }

  ngOnInit() {
    this.appData.getStoriesList().then((stories) => {
      this.stories = stories;
    });

    this.modalWillDismiss().then(() => {
      console.log('storyModalWillDismiss');
    });
  }

  ionViewDidEnter() {
    this.storyEventListner = this.renderer2.listen(document.querySelector('ion-slides'), 'touchstart', (event) => {
      // TouchEnd
      const onTouchEnd = () => {
        event.target.removeEventListener('touchend', onTouchEnd);
        this.storyTouchEnd(event);
      };
      event.target.addEventListener('touchend', onTouchEnd);

      // TouchStart
      this.storyTouchStart(event);
    });

  }

  ngOnDestroy(): void {
    // this.activeStoryOption.storyActiveColor = '#fff';

    // Unlisten story modal events
    if (this.storyEventListner) {
      this.storyEventListner();
    }
  }

}
