import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
//import * as jwt_decode from "jwt-decode";
import jwt_decode from 'jwt-decode';
import { map, Observable } from 'rxjs';
import { SecurityService } from '../../security/services/security.service';
import { StorageService } from '../../security/services/storage.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  user2:Observable<string>=new Observable();
  user = 'welcome';

  constructor(
    public storageService: StorageService,
    public securityService: SecurityService,
    public router: Router
  ) { }

  logout() {
    const token = this.storageService.getToken('access_token');
    const _user_id = jwt_decode<User>(token).user_id;
    const user = { user_id: _user_id };
    this.securityService.logout(user).subscribe(
      data => {
        this.storageService.deleteAllToken()
        this.router.navigateByUrl('/');
      }
    );
  }

  ngOnInit(): void {
    // this.user2=this.userService.current_user().pipe(
    //   map(e=>e.username)
    // )
    this.user = this.storageService.getToken('username');
  }

}
export interface User{
  user_id:string
}