import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SecurityService {

  constructor(
    private http: HttpClient
  ) { }

  login(user: any): Observable<any> {
    return this.http.post("http://127.0.0.1:8000/dj-rest-auth/login/", user);
  }
  register(user: any): Observable<any> {
    return this.http.post("http://127.0.0.1:8000/dj-rest-auth/registration/", user);
  }
  logout(user: any): Observable<any>{
    return this.http.post("http://127.0.0.1:8000/dj-rest-auth/logout/", user);
  }
  current_user(): Observable<any>{
    return this.http.get("http://54.209.84.3/api/authentication/user/");
  }
}