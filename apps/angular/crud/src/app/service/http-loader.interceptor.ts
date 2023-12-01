import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Observable, finalize } from 'rxjs';
import { LoadingIndicatorService } from './loading-indicator.service';
import { Injectable } from '@angular/core';

@Injectable()
export class HttpLoaderInterceptor implements HttpInterceptor {
  constructor(private loadingIndicatorService: LoadingIndicatorService) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler,
  ): Observable<HttpEvent<any>> {
    this.loadingIndicatorService.startLoading();

    return next
      .handle(req)
      .pipe(finalize(() => this.loadingIndicatorService.stopLoading()));
  }
}
