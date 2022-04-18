import { Injectable } from '@angular/core';
import {HttpClient, HttpResponse} from "@angular/common/http";
import { loginRequest } from '../MyComponents/details/loginRequest';
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  serverUrl = 'http://localhost:8020/';
  options = {
    responseType: 'json',
  };
  constructor(private httpClient: HttpClient) {}

  employeeLogin(form){
    return this.httpClient.post(this.serverUrl+'login',form);
  }

}
