/* eslint-disable @typescript-eslint/no-namespace */

import { apiGetUser } from './profile.constant';
import { ProfileModel } from './profile.model';

export namespace ProfileActions {
  export class FetchUser {
    static readonly type = '[Profile Tab] Fetch user';
    constructor(public userId: string, public api: string = '') {
      this.api = apiGetUser(this.userId);
    }
  }

  export class FetchUserSuccess {
    static readonly type = '[Profile Tab] Fetch user success';
    constructor(public listData: ProfileModel) {}
  }

  export class FetchUserFail {
    static readonly type = '[Profile Tab] Fetch user fail';
    constructor(public error: string) {}
  }
}
