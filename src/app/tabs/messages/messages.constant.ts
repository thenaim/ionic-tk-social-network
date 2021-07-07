import { environment } from '../../../environments/environment';

export const apiGetAllMessages = (search: string) =>
  `${environment.api}/${environment.apiVersion}/messages?search=${search}`;
