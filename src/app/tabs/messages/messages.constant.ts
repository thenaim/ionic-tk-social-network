import { environment } from '../../../environments/environment';

export const apiGetAllMessages = (search = '', page = 1) =>
  `${environment.api}/${environment.apiVersion}/messages?search=${search}&page=${page}&limit=10`;
