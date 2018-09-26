import { Injectable } from '@angular/core';
import { ApiDispatcherService } from '../core/api-dispatcher.service';
import { Observable } from 'rxjs';
import { HttpResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private _apiDispatcher: ApiDispatcherService
  ) { }

  registerUser(data: any): Observable<HttpResponse<any>> {
    return this._apiDispatcher.doPostApiCall(
      '/post',
      data
    );
  }

  getUserDetails(uid: string): Observable<HttpResponse<any>> {
    return this._apiDispatcher.doGetApiCall('/get', {
      userId: uid
    });
  }

  getError(): Observable<HttpResponse<any>> {
    return this._apiDispatcher.doErrorCall();
  }
}
