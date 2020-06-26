import { Injectable } from '@angular/core';
import * as faker from "faker";

@Injectable({
  providedIn: 'root'
})
export class FakerService {
  lang: string;
  constructor() { }

  async setLang(lang: string) {
    this.lang = lang;
  }

  getFaker() {
    return new Promise<Faker.FakerStatic>((resolve, reject) => {
      resolve(faker);
    });
  }
}
