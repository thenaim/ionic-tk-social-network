import { Component, OnInit } from '@angular/core';
import { FakerService } from '../../services/faker/faker.service';

@Component({
  selector: 'app-friends',
  templateUrl: './friends.page.html',
  styleUrls: ['./friends.page.scss'],
})
export class FriendsPage implements OnInit {
  friends: any[] = [];
  importantFriends: any[] = [];

  constructor(
    private faker: FakerService
  ) { }

  doRefresh(event) {
    this.dataInit();

    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 1000);
  }

  dataInit() {
    this.faker.getFaker().then((faker) => {
      this.friends = Array.apply(null, Array(5)).map(() => {
        return {
          id: faker.random.uuid(),
          first_name: faker.name.findName().split(' ')[0],
          last_name: faker.name.lastName(),
          avatar: faker.image.avatar(),
          city: faker.address.city(),
        };
      });

      this.importantFriends = Array.apply(null, Array(5)).map(() => {
        return {
          id: faker.random.uuid(),
          first_name: faker.name.findName().split(' ')[0],
          last_name: faker.name.lastName(),
          avatar: faker.image.avatar(),
          city: faker.address.city(),
        };
      });
    });
  }

  ngOnInit(): void {
    this.dataInit();
  }
}
