import { createSelector } from '@ngxs/store';
import { ProfilePageStateModel } from './profile.model';
import { ProfilePageState } from './profile.state';

export const selectUser = () =>
  createSelector([ProfilePageState], (state: ProfilePageStateModel) => state.profile.listData);

export const selectUserLoadingStates = () =>
  createSelector([ProfilePageState], (state: ProfilePageStateModel) => ({
    isLoading: state.profile.isLoading,
    isSuccess: state.profile.isSuccess,
    isFailed: state.profile.isFailed,
  }));
