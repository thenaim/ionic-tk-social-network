import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Config } from '@ionic/angular';

import { FakerService } from '../../shared/faker/faker.service';
import { AppData } from 'src/app/providers/app-data';

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

    private appData: AppData,
    private fakerService: FakerService
  ) { }

  doRefresh(event) {
    this.dataInit();

    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 1000);
  }

  async dataInit() {
    this.messagesList = await this.appData.getMessages();
  }

  ngOnInit(): void {
    this.isIos = this.config.get('mode') === 'ios';

    this.dataInit();
  }
}
