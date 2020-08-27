import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from '../Models/user-model';
import {restUrl} from '../util/constants';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor(private http: HttpClient) {}

  register(newUser: User): Observable<User> {
    console.log(newUser);
    return this.http.post<User>(restUrl, newUser);
  }
}
