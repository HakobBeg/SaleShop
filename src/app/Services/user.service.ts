import {Injectable} from '@angular/core';
import {User} from '../Models/user-model';

@Injectable({
  providedIn: 'root'
})

export class UserService {

  user: User;

  constructor() {
    this.user = null;
  }

}
