import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { UserService } from '../user/user.service';
import { AuthToken } from './authToken';
import { environment } from 'src/environments/environment';

let API_URL = '';
@Injectable({
  providedIn: 'root'
})
export class AuthService {


  authToken: AuthToken;


  constructor(
    private http: HttpClient,
    private userService: UserService) { 
      API_URL = environment.uriIam;

    }

  authenticate(userName: string, password: string) {

    return this.http
      .post<AuthToken>(
        API_URL + '/sgm-iam/authenticate', 
        { userName, password }, 
        { observe: 'response'} 
      )
      .pipe(tap(res => {
        this.userService.setToken(res.body.token);
      }));
  }
}