import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment'
import { ResponseAuthInterface } from '../interface/login.interface';

const ACCESS_DATA = environment.appAccessData;
const API_URL = environment.ApiUrl;

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private AuthInfo: ResponseAuthInterface;

  constructor(
    private http: HttpClient
  ) { }

  getToken(userName: string, userPassword: string) {

    let headers = new HttpHeaders({
      'Authorization': `Basic ${btoa(ACCESS_DATA)}`,
      'Content-Type': 'application/x-www-form-urlencoded'
    });

    let body = new URLSearchParams();
    body.append('username', userName);
    body.append('password', userPassword);
    body.append('grant_type', 'password');

    let urlEndPoint = `${API_URL}/security/oauth/token`;

    return this.http.post<ResponseAuthInterface>(urlEndPoint, body.toString(), { headers }).toPromise();
  }

  saveToken(dataAuth: ResponseAuthInterface) {
    this.AuthInfo = dataAuth;
    sessionStorage.setItem('accessToken', dataAuth.access_token)
  }

  deleteToken() {
    sessionStorage.removeItem('accessToken');
  }

  getAuthInfo() {
    return this.AuthInfo;
  }
}
