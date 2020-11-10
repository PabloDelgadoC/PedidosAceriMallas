import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { User, UserLogin } from '../auth/user';

@Injectable({
  providedIn: 'root'
})
export class Services {

  public headers =  new HttpHeaders().set('Content-Type', 'application/json');

  constructor(
    private http: HttpClient,
  ) { }

  public signUpPost(url: string, data: User): Observable<any> {
    return this.http.post(url, data, {headers: this.headers});
  }

  public logInPost(url: string, data: UserLogin): Observable<any> {
    return this.http.post(url, data, {headers: this.headers});
  }

  public passwordPatch(url, data): Observable<any> {
    return this.http.patch(url, data, {headers: this.headers});
  }
}
