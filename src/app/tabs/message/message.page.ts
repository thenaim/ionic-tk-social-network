import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Config } from '@ionic/angular';

import { FakerService } from '../../shared/faker/faker.service';

@Component({
  selector: 'app-message',
  templateUrl: 'message.page.html',
  styleUrls: ['message.page.scss']
})
export class MessagePage {
  messagesList: any[];
  searchMessageList: FormControl = new FormControl('');
  showSearchbar = false;
  isIos = false;

  constructor(
    public config: Config,

    private fakerService: FakerService
  ) { }

  ngOnInit(): void {
    this.isIos = this.config.get('mode') === 'ios';

    this.fakerService.getFaker().then((faker) => {
      this.messagesList = Array.apply(null, Array(25)).map(() => {
        return {
          id: faker.random.uuid(),
          first_name: faker.name.firstName(),
          last_name: faker.name.lastName(),
          email: faker.internet.email(),
          image: faker.internet.avatar(),
          last_message: faker.lorem.sentence()
        };
      });
    });
  }
}
