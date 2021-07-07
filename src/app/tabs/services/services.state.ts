import { Injectable } from '@angular/core';
import { State, StateToken } from '@ngxs/store';
import { ApiService } from '../../services/api/api.service';
import { ServicesPageStateModel } from './services.model';

export const initialState: ServicesPageStateModel = {
  services: {
    isLoading: false,
    isFailed: false,
    isSuccess: false,
    error: null,
    listData: [],
  },
};

export const STATE_TOKEN = new StateToken<ServicesPageStateModel>('services');

@State({
  name: STATE_TOKEN,
  defaults: initialState,
})
@Injectable()
export class ServicesPageState {
  constructor(private apiService: ApiService) {}
}
