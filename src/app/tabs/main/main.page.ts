import { Component, OnInit, ViewChild } from '@angular/core';
import { IonContent, IonInfiniteScroll, IonRefresher, MenuController } from '@ionic/angular';
import { Select, Store } from '@ngxs/store';
import { lastValueFrom, Observable } from 'rxjs';
import { UsersStoriesModel } from '../../components/users-stories/users-stories.model';
import { AppStoreModel } from '../../core/store';
import { FetchNewsActions, MainTabsActions, StoriesActions } from './main.actions';
import { MainTabModel, NewsModel } from './main.model';
import { selectMainTabsList, selectNews, selectNewsIsLoading, selectStories } from './main.selectors';

@Component({
  selector: 'app-main',
  templateUrl: 'main.page.html',
  styleUrls: ['main.page.scss'],
})
export class MainPage implements OnInit {
  @ViewChild(IonContent) ionContent: IonContent;
  @ViewChild(IonRefresher) ionRefresher: IonRefresher;
  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;

  @Select(selectMainTabsList()) tabs$: Observable<MainTabModel[]>;
  @Select(selectStories()) stories$: Observable<UsersStoriesModel[]>;

  @Select(selectNews()) news$: Observable<NewsModel[]>;
  @Select(selectNewsIsLoading()) newsIsLoading$: Observable<boolean>;

  constructor(private store: Store, private menuController: MenuController) {}

  trackBy(index) {
    return index;
  }

  toggleCameraMenu() {
    console.log('toggleCameraMenu');
    this.menuController.toggle('camera');
  }

  async doRefresh(event) {
    await lastValueFrom(this.store.dispatch(new FetchNewsActions.FetchNews(1, true)));
    await this.ionRefresher.complete();
  }

  async loadDataNewsPagination(event) {
    const activePage = this.store.selectSnapshot((state: AppStoreModel) => state.main.news.activePage);
    await lastValueFrom(this.store.dispatch(new FetchNewsActions.FetchNews(activePage + 1)));
    await this.infiniteScroll.complete();
  }

  async ngOnInit() {}

  ionViewDidEnter() {
    const activePage = this.store.selectSnapshot((state: AppStoreModel) => state.main.news.activePage);
    this.store.dispatch([
      new MainTabsActions.FetchMainTabs(),
      new StoriesActions.FetchStories(),
      new FetchNewsActions.FetchNews(activePage),
    ]);
    this.menuController.enable(true, 'camera');
  }

  ionViewDidLeave() {
    this.menuController.enable(false, 'camera');
  }
}
