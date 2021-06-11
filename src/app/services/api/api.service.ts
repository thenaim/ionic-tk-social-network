import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngxs/store';
import { Observable, throwError } from 'rxjs';
import { ApiOptionalHeadersModel } from './api.model';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private store: Store, private http: HttpClient) {}

  public httpHeaderOptions(optionalHeaders: ApiOptionalHeadersModel): HttpHeaders {
    // const accessToken = this.store.selectSnapshot<string>(AuthGuardSelectors.authToken(AuthGuardState));

    return new HttpHeaders({
      // Authorization: `Bearer ${accessToken}`,
      ...optionalHeaders,
    });
  }

  public get(url: string, optionalHeaders: ApiOptionalHeadersModel = {}): Observable<any> {
    return this.http.get(url, {
      headers: this.httpHeaderOptions(optionalHeaders),
    });
  }

  public post(url: string, body, optionalHeaders: ApiOptionalHeadersModel = {}): Observable<any> {
    return this.http.post(url, body, {
      headers: this.httpHeaderOptions(optionalHeaders),
    });
  }

  public put(url: string, body, optionalHeaders: ApiOptionalHeadersModel = {}): Observable<any> {
    return this.http.put(url, body, {
      headers: this.httpHeaderOptions(optionalHeaders),
    });
  }

  private handleError(operation = 'operation') {
    return (error: HttpErrorResponse): Observable<any> => {
      console.log('status: ', error.status, ' operation: ', operation);

      // Let the app keep running by returning a safe result.
      return throwError(() => error);
    };
  }
}
