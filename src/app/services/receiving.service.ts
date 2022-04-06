import { Injectable } from '@angular/core';
import {HttpClient, HttpResponse} from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class ReceivingService {

  serverUrl = 'http://localhost:8020/';
  options = {
    responseType: 'json',
  };
  constructor(private httpClient: HttpClient) { }
  getPDDDetailByUHID(id) {
    return this.httpClient.get(this.serverUrl + 'getOne/'+id);
  }

  getSampleExist(sample_id){
    return this.httpClient.get(this.serverUrl+'getSampleExist'+sample_id);
  }

  insertSampleDetails(sample){
    return this.httpClient.post(this.serverUrl+'insert_NSamples',sample)
  }

  getAllRequests(){
    return this.httpClient.get(this.serverUrl+'getRequests');
  }

  updateAccept(patient){
    return this.httpClient.put(this.serverUrl+'updateAccept',patient);
  }

  getAcceptedRequests(){
    return this.httpClient.get(this.serverUrl+'getAcceptedRequests');
  }
}
