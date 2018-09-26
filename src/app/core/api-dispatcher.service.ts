import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiDispatcherService {
  private _baseUrl: string = 'http://httpbin.org';
  constructor(
    private _http: HttpClient
  ) { }


  doGetApiCall(url:string, queryPramams?:any): Observable<any> {
    const apiPath: string = this._baseUrl + url;
    return this._http.get(apiPath, {
      params: queryPramams
    });
  }

  doPostApiCall(url, data): Observable<HttpResponse<any>> {
    const apiPath: string = this._baseUrl + url;
    return this._http.post(apiPath, data, {
      observe: 'response'
    });
  }

  doErrorCall(): Observable<HttpResponse<any>> {
    const apiPath: string = this._baseUrl + '/post';
    return this._http.get(apiPath, {
      observe: 'response'
    });
  }
}
