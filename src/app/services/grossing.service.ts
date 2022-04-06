import { Injectable } from '@angular/core';
import {HttpClient, HttpResponse} from "@angular/common/http";
import { sample } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class GrossingService {

  serverUrl = 'http://localhost:8020/';
  options = {
    responseType: 'json',
  };
  constructor(private httpClient: HttpClient) { }

  getPendingSamples(){
    return this.httpClient.get(this.serverUrl+'getPendingSamples');
  }
  getPatient_sampleID(sample_id){
    return this.httpClient.get(this.serverUrl+'getPatient_sampleID/'+sample_id);
  }
  getOneSample(sample_id){
    return this.httpClient.get(this.serverUrl+'getOneSample/'+sample_id);
  }

  insertBlockDetails(blockDetails){
    return this.httpClient.post(this.serverUrl+'block/insertAllBlocks',blockDetails);
  }
  setLastUpdated(sample){
    return this.httpClient.put(this.serverUrl+'setLastUpdated',sample)
  }
}
