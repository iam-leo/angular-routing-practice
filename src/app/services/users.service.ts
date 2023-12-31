import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  url= 'https://gorest.co.in/public/v2/users';

  constructor( private http: HttpClient ) { }

  getUsers(): Observable<any>{
    return this.http.get<any>(this.url)
  }

  getUserDetails(id: number): Observable<any>{
    return this.http.get<any>(this.url + '/' + id);
  }
}
