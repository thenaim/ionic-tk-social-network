import { Injectable } from '@angular/core';
import { State, StateToken } from '@ngxs/store';
import { ApiService } from '../../services/api/api.service';
import { ProfilePageStateModel } from './profile.model';

export const initialState: ProfilePageStateModel = {
  profile: {
    isLoading: false,
    isFailed: false,
    isSuccess: false,
    error: null,
    listData: [],
  },
  isDarkMode: false,
  language: 'en',
};

export const STATE_TOKEN = new StateToken<ProfilePageStateModel>('profile');

@State({
  name: STATE_TOKEN,
  defaults: initialState,
})
@Injectable()
export class ProfilePageState {
  constructor(private apiService: ApiService) {}
}
