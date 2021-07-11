import { environment } from '../../../environments/environment';

export const apiGetAllMainTabs = `${environment.api}/${environment.apiVersion}/tabs`;
export const apiGetAllStories = `${environment.api}/${environment.apiVersion}/stories`;
export const apiGetAllNews = (page = 1) => `${environment.api}/${environment.apiVersion}/news?page=${page}&limit=5`;
