import { Component, OnInit } from '@angular/core';
import { FakerService } from 'src/app/services/faker/faker.service';

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

  ngOnInit() {
    this.faker.getFaker().then((fake) => {
      for (let index = 0; index < 15; index++) {
        this.friends.push({
          id: fake.random.uuid(),
          first_name: fake.name.firstName(),
          last_name: fake.name.lastName(),
          avatar: fake.image.avatar(),
          city: fake.address.city(),
        });
      }

      for (let index = 0; index < 5; index++) {
        this.importantFriends.push({
          id: fake.random.uuid(),
          first_name: fake.name.firstName(),
          last_name: fake.name.lastName(),
          avatar: fake.image.avatar(),
          city: fake.address.city(),
        });
      }
    });
  }

}
