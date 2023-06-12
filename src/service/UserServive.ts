import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments';
import { ListUserResponse } from '../response/ListUserResponse';
@Injectable({
  providedIn: 'root',
})
export class UserService {
  user_url: string = environment.baseURL + 'user/';

  constructor(private http: HttpClient) {}

  getAllUsers(
    page: number,
    size: number,
    username: string,
    fullName: string,
    email: string,
    phoneNumber: string
  ): Observable<ListUserResponse> {
    let params = new HttpParams();
    params = params.append('page', page.toString());
    params = params.append('size', size.toString());
    params = params.append('username', username);
    params = params.append('fullName', fullName);
    params = params.append('email', email);
    params = params.append('phoneNumber', phoneNumber);


    return this.http.get<ListUserResponse>(this.user_url + 'all', { params });
  }
}
