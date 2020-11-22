import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../model/user.component';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  USER_NAME_SESSION_ATTRIBUTE_NAME = 'authenticatedUser';

  // tslint:disable-next-line:ban-types
  public username: String;
  // tslint:disable-next-line:ban-types
  public password: String;
  constructor(private httpClient: HttpClient) { }

  // Retrieves user token and checks authentication
  // tslint:disable-next-line:typedef
  authenticate(username, password) {

    // return this.httpClient.post<any>('http://localhost:9092/authenticate',
    // {username, password}).subscribe(
    //   userData => {
    //     sessionStorage.setItem('username', username);
    //     const tokenStr = 'Bearer' + userData.token;
    //     sessionStorage.setItem('token', tokenStr);
    //     return userData;
    //   }
    // );
    return this.httpClient.get(`http://localhost:9092/authenticate/login`,
      { headers: { authorization: this.createBasicAuthToken(username, password) } }).pipe(map((res) => {
      this.username = username;
      this.password = password;
      this.registerSuccessfulLogin(username, password);
    }));
  }

  // tslint:disable-next-line:typedef ban-types
  createBasicAuthToken(username: String, password: String) {
    return 'Basic ' + window.btoa(username + ':' + password);
  }

  // tslint:disable-next-line:typedef
  registerSuccessfulLogin(username, password) {
    sessionStorage.setItem(this.USER_NAME_SESSION_ATTRIBUTE_NAME, username);
  }
  isUserLoggedIn(): boolean {
    const user = sessionStorage.getItem(this.USER_NAME_SESSION_ATTRIBUTE_NAME);
    if (user === null) { return false; }
    return true;
  }
  // // Checks whether the user is logged in
  // isUserLoggedIn(): boolean {
  //   const user = sessionStorage.getItem('username');
  //   return !(user === null);
  // }

  // Removes user session(logout)
  // tslint:disable-next-line:typedef
  logOut() {
    sessionStorage.removeItem('username');
  }

  // Retrives role of user(customer/admin)
  // tslint:disable-next-line:ban-types typedef
  getRole(username: String) {
    return this.httpClient.get('http://localhost:9092/getRole?username=' + username);
  }

  // Adds a new User
  // tslint:disable-next-line:ban-types typedef
  signUp(user: User){
    return this.httpClient.post('http://localhost:9092/user/createUser', user);
  }

  // @ts-ignore
  showAvailableTable(): Observable<any>{
    return this.httpClient.get('http://localhost:9092/tables/viewAvailbaleTable');

  }

  // tslint:disable-next-line:typedef
  addReservation(reservation: any, noOfPerson: any) {
    const form = new FormData();
    return this.httpClient.post('http://localhost:9092/reservation/add?', form);
  }

  // tslint:disable-next-line:typedef
  showReservation() {
    return this.httpClient.get('http://localhost:9092/reservation/view');
  }
}
