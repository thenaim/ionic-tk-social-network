import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppData } from 'src/app/providers/app-data';
import { IonContent } from '@ionic/angular';
import { BehaviorSubject } from 'rxjs';
import { debounceTime, tap } from 'rxjs/operators';
import { FakerService } from 'src/app/shared/faker/faker.service';

@Component({
  selector: 'app-message-detail',
  templateUrl: './message-detail.page.html',
  styleUrls: ['./message-detail.page.scss'],
})
export class MessageDetailPage implements OnInit {
  user_id = null;
  user = {};
  pageScrolling = false;
  scrolling: BehaviorSubject<boolean> = new BehaviorSubject(false);
  chats: any[] = [];

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
    console.log('Scroll start');
  }

  logScrolling(event) {
    console.log('Scrolling');
  }

  logScrollEnd() {
    this.scrolling.next(false);
    console.log('Scroll end');
  }

  ngOnInit() {
    this.faker.getFaker().then(faker => {
      for (let ch = 0; ch < 6; ch++) {
        const chat = {
          date: faker.date.weekday(),
          chats: []
        };
        
        for (let ms = 0; ms < 12; ms++) {
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
    });

    console.log(this.chats);

    this.appData.getMessageUser(this.user_id).then((res) => {
      this.user = res;
      
      this.content.scrollToBottom(0);
    });

    this.scrolling.pipe(
      tap((scrol => {
        // if scroll true, then set true immediately
        if (scrol) {
          this.pageScrolling = scrol;
        }
      })),
      debounceTime(400)).subscribe(res => {
      this.pageScrolling = res;
    });
  }
}
