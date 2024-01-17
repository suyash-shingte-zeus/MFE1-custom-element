import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GlobalStateService {
  private globalStateSubject = new BehaviorSubject<any>(null);
  globalState$ = this.globalStateSubject.asObservable();

  updateState(newState: any) {
    this.globalStateSubject.next(newState);
  }

  getState(): Observable<any> {
    return this.globalState$;
  }
}
