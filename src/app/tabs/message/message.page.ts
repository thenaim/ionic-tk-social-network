import {Component, OnInit} from '@angular/core';
import { FormControl } from '@angular/forms';
import { Config } from '@ionic/angular';

import { FakerService } from '../../services/faker/faker.service';
import { AppData } from 'src/app/providers/app-data';

@Component({
  selector: 'app-message',
  templateUrl: 'message.page.html',
  styleUrls: ['message.page.scss']
})
export class MessagePage implements OnInit {
  messagesList: any[];
  searchMessageList: FormControl = new FormControl('');
  showSearchbar = false;
  isIos = false;

  constructor(
    public config: Config,

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
   * Data init
   */
  async dataInit() {
    this.fakerService.getFaker().then((faker) => {
      this.messagesList = Array.apply(null, Array(25)).map(() => {
        return {
          id: faker.random.uuid(),
          first_name: faker.name.findName().split(' ')[0],
          last_name: faker.name.lastName(),
          email: faker.internet.email(),
          image: faker.internet.avatar(),
          last_message: faker.lorem.sentence()
        };
      });
    });
  }

  ngOnInit(): void {
    this.isIos = this.config.get('mode') === 'ios';

    this.dataInit();
  }
}
