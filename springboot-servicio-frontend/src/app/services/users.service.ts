import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment'
import { UserInterface } from '../interface/user.interface';

const API_URL = environment.ApiUrl;

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(
    private http: HttpClient
  ) { }

  gerAllUsers() {
    let urlEndPoint = `${API_URL}/usuarios`;
    return this.http.get<UserInterface[]>(urlEndPoint);
  }
}
