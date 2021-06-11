import { UsersStoriesModel } from '../../components/users-stories/users-stories.model';
import { AppStoreLoadingStatesModel } from '../../core/store/store.model';

export interface NewsModel {
  id: string;
  firstName: string;
  lastName: string;
  avatar: string;
  image: string;
  content: string;
  likes: number;
  comments: number;
  shared: number;
  views: number;
}

export interface NewsStateModel extends AppStoreLoadingStatesModel {
  listData: NewsModel[];
}

export interface StoriesStateModel extends AppStoreLoadingStatesModel {
  listData: UsersStoriesModel[];
}

export interface MainPageStateModel {
  news: NewsStateModel;
  stories: StoriesStateModel;
}
