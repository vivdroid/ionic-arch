import { ApiService } from './../api/api.service';
import { Injectable } from '@angular/core';

import { UserModel } from '../../models';
import * as Constants from '../../shared/constants';

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/share';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(public apiService: ApiService) { }

  getAll(): Observable<any> {
    return this.apiService.get(Constants.Api.USERS).share();
  }

  delete(item: UserModel): Observable<any> {
    return this.apiService.delete(Constants.Api.USERS + '/' + item.id).share();
  }

  add(body: any): Observable<any> {
    return this.apiService.post(Constants.Api.USERS, body).share();
  }
}
