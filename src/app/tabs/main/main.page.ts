import { Component, OnInit, ViewChild } from '@angular/core';
import { IonContent, MenuController } from '@ionic/angular';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { UsersStoriesModel } from '../../components/users-stories/users-stories.model';
import { FetchNewsActions, MainTabsActions, StoriesActions } from './main.actions';
import { MainTabModel, NewsModel } from './main.model';
import { selectMainTabsList, selectNews, selectStories } from './main.selectors';

@Component({
  selector: 'app-main',
  templateUrl: 'main.page.html',
  styleUrls: ['main.page.scss'],
})
export class MainPage implements OnInit {
  @ViewChild(IonContent) ionContent: IonContent;

  @Select(selectMainTabsList()) tabs$: Observable<MainTabModel[]>;
  @Select(selectStories()) stories$: Observable<UsersStoriesModel[]>;
  @Select(selectNews()) news$: Observable<NewsModel[]>;

  constructor(private store: Store, private menuController: MenuController) {}

  trackBy(index) {
    return index;
  }

  toggleCameraMenu() {
    console.log('toggleCameraMenu');
    this.menuController.toggle('camera');
  }

  async ngOnInit() {
    this.store.dispatch([
      new MainTabsActions.FetchMainTabs(),
      new StoriesActions.FetchStories(),
      new FetchNewsActions.FetchNews(),
    ]);
  }

  ionViewDidEnter() {
    this.menuController.enable(true, 'camera');
  }

  ionViewDidLeave() {
    this.menuController.enable(false, 'camera');
  }
}
