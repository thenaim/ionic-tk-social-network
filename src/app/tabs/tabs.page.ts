import { Component } from '@angular/core';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs/internal/Observable';
import { TabModel } from './tabs.model';
import { TabsSelectors } from './tabs.selectors';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss'],
})
export class TabsPage {
  @Select(TabsSelectors.selectTabs()) tabs$: Observable<TabModel[]>;

  constructor() {}

  trackByTab(index: number) {
    return index;
  }
}
