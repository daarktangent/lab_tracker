import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VerificationService {
  

  serverUrl = 'http://localhost:8020/';
  options = {
    responseType: 'json',
  };
  constructor(private httpClient: HttpClient) { }
  getPatientByID(id){
    return this.httpClient.get(this.serverUrl + 'getOne/'+id);
  }
  getPatient_sampleID(sample_id){
    return this.httpClient.get(this.serverUrl+'getPatient_sampleID/'+sample_id);
  }
  getOneSample(sample_id){
    return this.httpClient.get(this.serverUrl+'getOneSample/'+sample_id);
  }
  getBlkDetailsOfPatient(patient_id){
    return this.httpClient.get(this.serverUrl+'block/getBlkDetailsOfPatient/'+patient_id);
  }
  getSampleDetailsOfPatient(patient_id){
    return this.httpClient.get(this.serverUrl+'getSampleDetailsOfPatient/'+patient_id);
  }
  insertReport(patient_details){
    return this.httpClient.put(this.serverUrl+'update/',patient_details);
  }
  getPendingPatients(stationNo){
    return this.httpClient.get(this.serverUrl+'getPendingPatients/'+stationNo);
  }
  updateSample(sample){
    return this.httpClient.put(this.serverUrl+'updateSample/',sample);
  }
  updateBlock(block){
    return this.httpClient.put(this.serverUrl+'block/updateBlock/',block);
  }
}

