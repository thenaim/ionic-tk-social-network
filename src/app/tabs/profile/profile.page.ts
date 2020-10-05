import {Component, OnInit} from '@angular/core';
import { MenuController } from '@ionic/angular';
import { SubscriptionLike } from 'rxjs';
import { AppEventsService } from '../../services/app-events/app-events.service';
import { FakerService } from '../../services/faker/faker.service';

@Component({
  selector: 'app-profile',
  templateUrl: 'profile.page.html',
  styleUrls: ['profile.page.scss']
})
export class ProfilePage implements OnInit {
  user = {
    full_name: '',
    nickname: '',
    image: '',
    status: '',
    online: false,
    isMobileOnline: true
  };

  private subscriptions: SubscriptionLike[] = [];
  constructor(
    private appEvents: AppEventsService,
    private menu: MenuController,

    private fakerService: FakerService
  ) { }

  toggleMenu() {
    this.menu.toggle('profile');
  }

  doRefresh(event) {
    setTimeout(() => {
      this.getUser();
      event.target.complete();
    }, 500);
  }

  getUser() {
    this.fakerService.getFaker().then((faker) => {
      this.user.full_name = faker.name.findName();
      this.user.image = faker.internet.avatar();
      this.user.status = faker.lorem.word();
      this.user.online = faker.random.boolean();
      this.user.isMobileOnline = faker.random.boolean();
      this.user.nickname = this.user.full_name.toLocaleLowerCase().split(' ').join('_');
    });
  }
  ngOnInit(): void {
    this.getUser();

    // Subscribe to tab click event
    this.subscriptions.push(
      this.appEvents.onTabClicks.subscribe((tab => {
        if (tab.id === 'profile') {
          this.menu.toggle('profile');
        }
      }))
    );
  }

  ionViewDidEnter() {
    this.menu.enable(true, 'profile');
  }

  ionViewDidLeave() {
    this.menu.enable(false, 'profile');

    this.subscriptions.forEach(subscription => subscription.unsubscribe());
    this.subscriptions = [];
  }
}
