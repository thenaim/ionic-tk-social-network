import { environment } from '../../../environments/environment';

export const apiGetUser = (userId: string) => `${environment.api}/${environment.apiVersion}/users/${userId}`;
