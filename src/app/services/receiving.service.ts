import { Injectable } from '@angular/core';
import {HttpClient, HttpResponse} from "@angular/common/http";
import { Observable } from 'rxjs';
import { patientDetails } from '../MyComponents/details/patientDetails';
@Injectable({
  providedIn: 'root'
})
export class ReceivingService {

  serverUrl = 'http://localhost:8020/';
  options = {
    responseType: 'json',
  };
  constructor(private httpClient: HttpClient) { }
  getPDDDetailByUHID(id):Observable<patientDetails> {
    return this.httpClient.get<patientDetails>(this.serverUrl + 'getOne/'+id);
  }

  getSampleExist(sample_id){
    return this.httpClient.get(this.serverUrl+'getSampleExist'+sample_id);
  }

  insertSampleDetails(sample){
    return this.httpClient.post(this.serverUrl+'insert_NSamples',sample)
  }

  getAllRequests(): Observable<patientDetails[]>{
    return this.httpClient.get<patientDetails[]>(this.serverUrl+'getRequests');
  }

  // getAllEmployee(): Observable<Employee[]>{
  //   return this.http.get<Employee[]>(this.getEmpURL);
  // }

  updateAccept(patient){
    return this.httpClient.put(this.serverUrl+'updateAccept',patient);
  }

  getAcceptedRequests():Observable<patientDetails[]>{
    return this.httpClient.get<patientDetails[]>(this.serverUrl+'getAcceptedRequests');
  }
  insertPD_manual(patient){
    return this.httpClient.post(this.serverUrl+'addPatient',patient);
  }
  deleteRequest(patient){
    return this.httpClient.delete(this.serverUrl+'delete/'+patient);
  }
}
