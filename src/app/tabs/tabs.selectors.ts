import { createSelector } from '@ngxs/store';
import { map } from 'lodash';
import { TabsStateModel } from './tabs.model';
import { TabsState } from './tabs.state';

export class TabsSelectors {
  static selectTabs() {
    return createSelector([TabsState], (tabState: TabsStateModel) => map(tabState.listData, (tab) => tab));
  }
}
