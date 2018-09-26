import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiDispatcherService {
  private _baseUrl: string = 'http://httpbin.org';
  constructor(
    private _http: HttpClient
  ) { }


  doGetApiCall(url: string, queryPramams?: any): Observable<any> {
    const apiPath: string = this._baseUrl + url;
    return this._http.get(apiPath, {
      params: queryPramams
    }).pipe(
      catchError(this.handleError)
    );
  }

  doPostApiCall(url, data): Observable<HttpResponse<any>> {
    const apiPath: string = this._baseUrl + url;
    return this._http.post(apiPath, data, {
      observe: 'response'
    }).pipe(
      catchError(this.handleError)
    );
  }

  doErrorCall(): Observable<HttpResponse<any>> {
    const apiPath: string = this._baseUrl + '/post';
    return this._http.get(apiPath, {
      observe: 'response'
    }).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse): Observable<any> {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      {
        statusCode: error.status,
        msg: 'Server Error. Please try again!'
      }
    );
  };
}
