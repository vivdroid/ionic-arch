import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MockService {

  constructor() { }

  public getMockData(): Observable<any> {
    const mockData = {
      id: 1234,
      name: 'name'
    };
    return of(mockData);
  }
}
