import { Injectable } from '@angular/core';
import {Observable, of, throwError} from "rxjs";
import {mockUsers} from "../../mock/users.mock";
import {User} from "../../interfaces/user.interface";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }
  login(login:string, password:string): Observable<User> {
    const foundUser = mockUsers.find(
      item => item.login === login && item.password === password);

    if (!foundUser) {
      return throwError(() => ({error: 'User is not found!'}));
    } else {
      let copyUser: any = {...foundUser};
      delete copyUser.password;
      return of(copyUser);
    }
  }

  editUser(user: User): Observable<User> {
    let selectedUserIndex = mockUsers.findIndex(
      item => item.id === user.id);
    if(selectedUserIndex === -1) {
      return throwError(() => ({error: 'User is not found!'}));
    } else {
      const newUser = Object.assign(mockUsers[selectedUserIndex], user);
      mockUsers[selectedUserIndex] = newUser;
      return of(newUser);
    }
  }
}
