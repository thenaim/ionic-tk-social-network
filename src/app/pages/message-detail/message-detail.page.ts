import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppData } from '../../providers/app-data';
import { IonContent, IonItemSliding } from '@ionic/angular';
import { BehaviorSubject, SubscriptionLike } from 'rxjs';
import { debounceTime, tap } from 'rxjs/operators';
import { FakerService } from '../../services/faker/faker.service';
import { FormControl, Validators } from '@angular/forms';

export interface CurrentUserInterface {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  image: string;
  last_message: string;
}

@Component({
  selector: 'app-message-detail',
  templateUrl: './message-detail.page.html',
  styleUrls: ['./message-detail.page.scss'],
})
export class MessageDetailPage implements OnInit, OnDestroy {
  userId = null;
  user: CurrentUserInterface;
  chats: any[] = [];

  messageControl: FormControl = new FormControl('', [
    Validators.required
  ]);

  pageScrolling = false;
  isAllowScroll = true;
  scrolling: BehaviorSubject<boolean> = new BehaviorSubject(false);

  subscriptions: SubscriptionLike[] = [];
  @ViewChild(IonContent) private content: IonContent;
  constructor(
    private faker: FakerService,
    private appData: AppData,
    private route: ActivatedRoute
  ) {
    this.route.params.subscribe(params => {
      this.userId = params.id;
    });
  }

  /**
   * Content scroll start
   */
  logScrollStart() {
    this.scrolling.next(true);
  }

  /**
   * Content scrolling
   */
  logScrolling(event) {
    // console.log('Scrolling');
  }

  /**
   * Content scroll end
   */
  logScrollEnd() {
    this.scrolling.next(false);
  }

  /**
   * Reply message (drag)
   * @param {Event} event - drag event
   * @param {IonItemSliding} slidingItem - item sliding directive
   */
  messageDraged(event, slidingItem: IonItemSliding) {
    if (event.detail.ratio === 1) {
      slidingItem.closeOpened();
    }
  }

  /**
   * Send message
   */
  sendMessage(event) {
    event.preventDefault();

    // add message
    this.chats[this.chats.length - 1].chats.push({
      message: this.messageControl.value,
      date: new Date(),
      type: 'me'
    });

    // clear input
    this.messageControl.setValue('');

    this.faker.getFaker().then(faker => {
      // generate answer
      for (let i = 0; i < faker.random.arrayElement([1, 2, 3]); i++) {
        this.chats[this.chats.length - 1].chats.push({
          message: faker.lorem.sentences(faker.random.arrayElement([1, 2, 3])),
          date: faker.date.recent(),
          first_name: faker.name.findName().split(' ')[0],
          last_name: faker.name.lastName(),
          avatar: faker.image.avatar(),
          type: 'user'
        });
      }

      // scroll to bottom
      setTimeout(() => {
        this.content.scrollToBottom(0);
      });
    });
  }

  ngOnInit(): void {
    this.faker.getFaker().then(faker => {
      // generate fake message data
      this.chats = Array.apply(null, Array(4)).map(() => {
        const chat = {
          date: faker.date.weekday(),
          chats: []
        };

        chat.chats = Array.apply(null, Array(5)).map(() => {
          return {
            message: faker.lorem.sentences(faker.random.arrayElement([1, 2, 3])),
            date: faker.date.recent(),
            first_name: faker.name.findName().split(' ')[0],
            last_name: faker.name.lastName(),
            avatar: faker.image.avatar(),
            type: faker.random.arrayElement(['user', 'me'])
          };
        });

        return chat;
      });

      // generate current user, but set id from url param
      this.user = {
        id: this.userId,
        first_name: faker.name.findName().split(' ')[0],
        last_name: faker.name.lastName(),
        email: faker.internet.email(),
        image: faker.internet.avatar(),
        last_message: faker.lorem.sentence()
      };

      // scroll to bottom
      setTimeout(() => {
        this.content.scrollToBottom(0);
      });
    });

    // subscribe to scrolling event
    this.subscriptions.push(
      this.scrolling.pipe(
        tap((scrol => {
          if (scrol) {
            this.pageScrolling = scrol;
          }
        })),
        debounceTime(400)).subscribe(res => {
          this.pageScrolling = res;
        })
    );
  }

  ionViewDidEnter() {
    setTimeout(() => {
      this.content.scrollToBottom(0);
    });
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
    this.subscriptions = [];
  }
}
