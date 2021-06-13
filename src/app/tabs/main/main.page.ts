import { Component, OnInit, ViewChild } from '@angular/core';
import { IonContent } from '@ionic/angular';
import { Select, Store } from '@ngxs/store';
import { lastValueFrom, Observable } from 'rxjs';
import { UsersStoriesModel } from '../../components/users-stories/users-stories.model';
import { FetchNewsActions, MainTabsActions, StoriesActions } from './main.actions';
import { MainTabModel, NewsModel } from './main.model';
import { NewsSelectors } from './main.selectors';

@Component({
  selector: 'app-main',
  templateUrl: 'main.page.html',
  styleUrls: ['main.page.scss'],
})
export class MainPage implements OnInit {
  @ViewChild(IonContent) ionContent: IonContent;

  @Select(NewsSelectors.selectMainTabs()) tabs$: Observable<MainTabModel[]>;
  @Select(NewsSelectors.selectMainTabsLoadingStates()) loadingMainTabsStates$: Observable<{
    isLoading: boolean;
    isFailed: boolean;
    isSuccess: boolean;
  }>;

  @Select(NewsSelectors.selectStories()) stories$: Observable<UsersStoriesModel[]>;
  @Select(NewsSelectors.selectStoriesLoadingStates()) loadingStoriesStates$: Observable<{
    isLoading: boolean;
    isFailed: boolean;
    isSuccess: boolean;
  }>;

  @Select(NewsSelectors.selectNews()) news$: Observable<NewsModel[]>;
  @Select(NewsSelectors.selectNewsLoadingStates()) loadingNewsStates$: Observable<{
    isLoading: boolean;
    isFailed: boolean;
    isSuccess: boolean;
  }>;

  constructor(private store: Store) {}

  async ngOnInit() {
    await lastValueFrom(this.store.dispatch(new MainTabsActions.FetchMainTabs()));
    await lastValueFrom(this.store.dispatch(new StoriesActions.FetchStories()));
    await lastValueFrom(this.store.dispatch(new FetchNewsActions.FetchNews()));
  }

  ionViewDidEnter() {}

  ionViewDidLeave() {}
}
