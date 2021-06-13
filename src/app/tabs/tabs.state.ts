import { Injectable } from '@angular/core';
import { Action, State, StateContext } from '@ngxs/store';
import { map } from 'lodash';
import { TabListModel, TabsStateModel } from './tabs.model';

export class AddBadgeAction {
  static readonly type = '[Tabs] Add badge to tab';
  constructor(public tab: TabListModel) {}
}

export class RemoveBadgeAction {
  static readonly type = '[Tabs] Remove badge from tab';
  constructor(public tab: TabListModel) {}
}

export class ClearBadgeAction {
  static readonly type = '[Tabs] Clear badge from tab';
  constructor(public tab: TabListModel) {}
}

export const initialState: TabsStateModel = {
  active: 'main',
  listData: [
    { id: 'main', badge: 0, icon: 'reader-outline', disabled: false },
    { id: 'services', badge: 0, icon: 'grid-outline', disabled: false },
  ],
  isLoading: false,
  isFailed: false,
  isSuccess: false,
  error: null,
};

@State<TabsStateModel>({
  name: 'tabs',
  defaults: initialState,
})
@Injectable()
export class TabsState {
  constructor() {}

  @Action(AddBadgeAction)
  addBadgeAction(ctx: StateContext<TabsStateModel>, action: AddBadgeAction) {
    const state = ctx.getState();
    ctx.patchState({
      listData: map(state.listData, (tab) => {
        if (tab.id === action.tab) {
          return { ...tab, badge: tab.badge + 1 };
        }
        return tab;
      }),
    });
  }

  @Action(RemoveBadgeAction)
  removeBadgeAction(ctx: StateContext<TabsStateModel>, action: AddBadgeAction) {
    const state = ctx.getState();
    ctx.patchState({
      listData: map(state.listData, (tab) => {
        if (tab.id === action.tab) {
          return { ...tab, badge: tab.badge ? tab.badge - 1 : tab.badge };
        }
        return tab;
      }),
    });
  }

  @Action(ClearBadgeAction)
  clearBadgeAction(ctx: StateContext<TabsStateModel>, action: ClearBadgeAction) {
    const state = ctx.getState();
    ctx.patchState({
      listData: map(state.listData, (tab) => {
        if (tab.id === action.tab) {
          return { ...tab, badge: 0 };
        }
        return tab;
      }),
    });
  }
}
