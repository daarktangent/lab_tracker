import { Injectable } from '@angular/core';
import {HttpClient, HttpResponse} from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class HISService {

  serverUrl = 'http://localhost:8020/';
  options = {
    responseType: 'json',
  };
  constructor(private httpClient: HttpClient) { }


  addPatientDetails(patient){
    return this.httpClient.post(this.serverUrl+'addPatient',patient);
  }
}
