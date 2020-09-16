import { Injectable } from '@angular/core';
import * as faker from 'faker';

import { AppLanguage } from '../../shared/ngrx/settings/settings.model';

@Injectable({
  providedIn: 'root'
})
export class FakerService {
  lang: AppLanguage;
  constructor() { }

  async setLang(lang: AppLanguage) {
    this.lang = lang;
    faker.setLocale(lang);
  }

  getFaker() {
    return new Promise<Faker.FakerStatic>((resolve, reject) => {
      resolve(faker);
    });
  }
}
