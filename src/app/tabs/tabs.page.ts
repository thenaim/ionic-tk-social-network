import { Component } from '@angular/core';
import { Select, Store } from '@ngxs/store';
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
  activeTab = 'main';

  constructor(private store: Store) {}

  /**
   * Set active tab on change
   *
   * @param event { tab: string }
   */
  onTabChange(event: { tab: string }) {
    this.activeTab = event.tab;
  }

  trackByFn(index: number) {
    return index;
  }
}
