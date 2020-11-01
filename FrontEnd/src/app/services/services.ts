import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Services {

  public headers =  new HttpHeaders().set('Content-Type', 'application/json');

  constructor( private http: HttpClient ) { }

  public signUpPost(url, data) {
    return this.http.post(url, data, {headers: this.headers});
  }

  public logIn(url) {
    return this.http.get(url);
  }
}
