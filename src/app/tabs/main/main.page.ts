import { Component, OnInit, ViewChild } from '@angular/core';
import { IonContent } from '@ionic/angular';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { FetchNews } from './main.actions';
import { NewsModel } from './main.model';
import { NewsSelectors } from './main.selectors';

@Component({
  selector: 'app-main',
  templateUrl: 'main.page.html',
  styleUrls: ['main.page.scss'],
})
export class MainPage implements OnInit {
  @ViewChild(IonContent) ionContent: IonContent;

  @Select(NewsSelectors.selectNews()) news$: Observable<NewsModel[]>;
  @Select(NewsSelectors.selectNewsLoadingStates()) loadingStates$: Observable<{
    isLoading: boolean;
    isFailed: boolean;
    isSuccess: boolean;
  }>;

  private subscriptions = true;
  constructor(private store: Store) {}

  ngOnInit() {
    this.store.dispatch(new FetchNews());
  }

  ionViewDidEnter() {
    this.subscriptions = true;
  }

  ionViewDidLeave() {
    this.subscriptions = false;
  }
}
