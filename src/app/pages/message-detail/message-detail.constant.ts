import { environment } from '../../../environments/environment';

export const apiGetMessageDetail = (messageId: string) =>
  `${environment.api}/${environment.apiVersion}/messages/${messageId}`;
