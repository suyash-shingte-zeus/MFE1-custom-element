import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable()
export class LocalStateService {
  private localStateSubject = new BehaviorSubject<any>(null);
  localState$ = this.localStateSubject.asObservable();

  updateState(newState: any) {
    this.localStateSubject.next(newState);
  }

  getState(): Observable<any> {
    return this.localState$;
  }
}
