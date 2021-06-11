import { apiGetAllNews } from './main.constant';
import { NewsModel } from './main.model';

export class FetchNews {
  static readonly type = '[News Tab] Fetch news';
  constructor(public api: string = apiGetAllNews) {}
}

export class FetchNewsSuccess {
  static readonly type = '[News Tab] Fetch news success';
  constructor(public listData: NewsModel[]) {}
}

export class FetchNewsFail {
  static readonly type = '[News Tab] Fetch news fail';
  constructor(public error: string) {}
}
