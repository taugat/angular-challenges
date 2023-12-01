import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class LoadingIndicatorService {
  private isLoadingSubject = new BehaviorSubject<boolean>(false);
  isLoading$ = this.isLoadingSubject.asObservable();

  startLoading() {
    this.isLoadingSubject.next(true);
  }

  stopLoading() {
    this.isLoadingSubject.next(false);
  }
}
