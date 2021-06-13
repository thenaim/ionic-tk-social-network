/* eslint-disable @typescript-eslint/no-namespace */
import { UsersStoriesModel } from '../../components/users-stories/users-stories.model';
import { apiGetAllMainTabs, apiGetAllNews, apiGetAllStories } from './main.constant';
import { MainTabModel, NewsModel } from './main.model';

/* Main tabs Actions */
export namespace MainTabsActions {
  export class FetchMainTabs {
    static readonly type = '[Main Tab] Fetch tabs';
    constructor(public api: string = apiGetAllMainTabs) {}
  }

  export class FetchMainTabsSuccess {
    static readonly type = '[Main Tab] Fetch tabs success';
    constructor(public listData: MainTabModel[]) {}
  }

  export class FetchMainTabsFail {
    static readonly type = '[Main Tab] Fetch tabs fail';
    constructor(public error: string) {}
  }
}

/* Stories Actions */
export namespace StoriesActions {
  export class FetchStories {
    static readonly type = '[Main Tab] Fetch stories';
    constructor(public api: string = apiGetAllStories) {}
  }

  export class FetchStoriesSuccess {
    static readonly type = '[Main Tab] Fetch stories success';
    constructor(public listData: UsersStoriesModel[]) {}
  }

  export class FetchStoriesFail {
    static readonly type = '[Main Tab] Fetch stories fail';
    constructor(public error: string) {}
  }
}

/* News Actions */
export namespace FetchNewsActions {
  export class FetchNews {
    static readonly type = '[Main Tab] Fetch news';
    constructor(public api: string = apiGetAllNews) {}
  }

  export class FetchNewsSuccess {
    static readonly type = '[Main Tab] Fetch news success';
    constructor(public listData: NewsModel[]) {}
  }

  export class FetchNewsFail {
    static readonly type = '[Main Tab] Fetch news fail';
    constructor(public error: string) {}
  }
}
