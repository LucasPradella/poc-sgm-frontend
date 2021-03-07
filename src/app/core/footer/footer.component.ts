import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../user/user';
import { UserService } from '../user/user.service';


@Component({
    selector: 'ap-footer',
    templateUrl: './footer.component.html'
})
export class FooterComponent  {
    
    user$: Observable<User>;

    constructor(private userService: UserService) {
        this.user$ = userService.getUser();
    }
}