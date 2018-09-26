import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpEvent,
  HttpRequest,
  HttpHandler,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, empty, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class HttpInterceptorService implements HttpInterceptor {
  constructor() { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const httpHeaders: any = {
      'X-Authorization': 'Bearer ' + new Date().toDateString(),
      'domain': 'xyz.com'
    }
    const newReq: HttpRequest<any> = req.clone({
      setHeaders: httpHeaders
    });
    return next.handle(newReq);
  }
  private handleError(error: HttpErrorResponse): Observable<any> {
    if (401 === error.status) {
      // Session expore
      return empty();
    }
    return of(error);
  }
}
