import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppData } from 'src/app/providers/app-data';
import { IonContent, IonItemSliding } from '@ionic/angular';
import { BehaviorSubject, SubscriptionLike } from 'rxjs';
import { debounceTime, tap } from 'rxjs/operators';
import { FakerService } from 'src/app/shared/faker/faker.service';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-message-detail',
  templateUrl: './message-detail.page.html',
  styleUrls: ['./message-detail.page.scss'],
})
export class MessageDetailPage implements OnInit {
  user_id = null;
  user = {};
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
      this.user_id = params['id'];
    });
  }

  logScrollStart() {
    this.scrolling.next(true);
  }

  logScrolling(event) {
    // console.log('Scrolling');
  }

  logScrollEnd() {
    this.scrolling.next(false);
  }

  messageDraged(event, slidingItem: IonItemSliding) {
    if (event.detail.ratio === 1) {
      slidingItem.closeOpened();
    }
  }

  sendMessage(event) {
    event.preventDefault();

    // add message
    this.chats[this.chats.length - 1].chats.push({
      message: this.messageControl.value,
      date: new Date(),
      type: 'me'
    });
    this.messageControl.setValue('');

    this.faker.getFaker().then(faker => {
      const answerCount = faker.random.arrayElement([1, 2, 3]);

      // add answer or answers
      for (let answer = 0; answer < answerCount; answer++) {
        this.chats[this.chats.length - 1].chats.push({
          message: faker.lorem.sentences(faker.random.arrayElement([1, 2, 3])),
          date: faker.date.recent(),
          first_name: faker.name.findName(),
          last_name: faker.name.lastName(),
          avatar: faker.image.avatar(),
          type: 'user'
        });
      }

      // scroll to bottom
      setTimeout(() => {
        this.content.scrollToBottom(0);
      }, 100);
    });
  }

  ngOnInit() {
    // generate fake data
    this.faker.getFaker().then(faker => {
      for (let ch = 0; ch < 4; ch++) {
        const chat = {
          date: faker.date.weekday(),
          chats: []
        };

        for (let ms = 0; ms < 5; ms++) {
          chat.chats.push({
            message: faker.lorem.sentences(faker.random.arrayElement([1, 2, 3])),
            date: faker.date.recent(),
            first_name: faker.name.findName(),
            last_name: faker.name.lastName(),
            avatar: faker.image.avatar(),
            type: faker.random.arrayElement(['user', 'me'])
          });
        }

        this.chats.push(chat);
      }

      setTimeout(() => {
        this.content.scrollToBottom(0);
      });
    });

    // get user
    this.appData.getMessageUser(this.user_id).then((res) => {
      this.user = res;
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
