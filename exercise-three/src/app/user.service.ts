import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {IUser} from './IUser';

@Injectable()
export class UserService {

  target = 'http://170.217.171.219:3000/users';

  constructor(private http: Http) { }

  getUsers(): Observable<IUser[]> {
    return this.http.get(this.target).map(resp => resp.json() as IUser[]);
  }

}
