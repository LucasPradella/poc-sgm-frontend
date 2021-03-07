import { Injectable } from '@angular/core';
import { TokenService } from '../token/token.service';
import { BehaviorSubject } from 'rxjs';
import { User } from './user';
import * as jtw_decode from 'jwt-decode';

@Injectable({ providedIn: 'root'})
export class UserService { 

    private userSubject = new BehaviorSubject<User>(null);
    private adminSubject = new BehaviorSubject<boolean>(null);
    private userName: string;
    private authorities: Array<string> = [];
    private admin: boolean = false;

    constructor(private tokenService: TokenService) { 

        this.tokenService.hasToken() && 
            this.decodeAndNotify();
    }

    setToken(token: string) {
        this.tokenService.setToken(token);
        this.decodeAndNotify();
    }

    getUser() {
        return this.userSubject.asObservable();
    }

    private decodeAndNotify() {
        const token = this.tokenService.getToken();
        const user = jtw_decode(token) as User;
        this.userName = user.name;
        this.userSubject.next(user);
        
        this.authorities = user.authorities;
        this.admin = this.authorities.includes("ROLE_ADMIN");
        this.adminSubject.next(this.admin)
    }

    logout() {
        this.tokenService.removeToken();
        this.userSubject.next(null);
        this.adminSubject.next(null);
    }

    isLogged() {
        return this.tokenService.hasToken();
    }

    getUserName() {
        return this.userName;
    }

    isLoggedAndAdmin() {
        return this.tokenService.hasToken() && this.admin;
    }

    isAdmin() {
        return this.adminSubject.asObservable();
    }
}