import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FakerService } from '../../shared/faker/faker.service';

@Component({
  selector: 'app-music',
  templateUrl: './music.page.html',
  styleUrls: ['./music.page.scss'],
})
export class MusicPage implements OnInit {

  searchMusic: FormControl = new FormControl('');
  activeSegment: FormControl = new FormControl('my_music');

  playlists: any[] = [];
  musics: any[] = [];

  constructor(
    private fakerService: FakerService
  ) { }

  doRefresh(event) {
    this.dataInit();

    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 400);
  }

  dataInit() {
    this.fakerService.getFaker().then((faker) => {
      // Musics
      this.musics = Array.apply(null, Array(8)).map(() => {
        return {
          id: faker.random.uuid(),
          image: faker.helpers.randomize([
            faker.image.city(500, 500),
            faker.image.cats(500, 500),
            faker.image.fashion(500, 500),
            faker.image.people(500, 500)
          ]),
          song: faker.lorem.word(),
          author: faker.internet.userName(),
          time: faker.helpers.randomize([1, 2, 3, 4]) + ':' + faker.random.number(60)
        };
      });

      // Playlist
      this.playlists = Array.apply(null, Array(8)).map(() => {
        return {
          id: faker.random.uuid(),
          image: faker.helpers.randomize([
            faker.image.city(500, 500),
            faker.image.cats(500, 500),
            faker.image.fashion(500, 500),
            faker.image.people(500, 500)
          ]),
          album: faker.lorem.word(),
          author: faker.internet.userName(),
          year: 2020
        };
      });
    });
  }

  ngOnInit() {
    this.dataInit();
  }

}
