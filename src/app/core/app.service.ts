import { Injectable } from '@angular/core';
import { ApiDispatcherService } from './api-dispatcher.service';
import { Observable } from 'rxjs';
import { HttpResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(
    private _apiDispatcher: ApiDispatcherService
  ) { }

  getProducts(): Observable<HttpResponse<any>> {
    return this._apiDispatcher.doGetApiCall('/get');
  }
}
