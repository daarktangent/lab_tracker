import { Component, OnInit } from '@angular/core';
import { DispatchService } from 'src/app/services/dispatch.service';
import { patientDetails } from '../details/patientDetails';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dispatch',
  templateUrl: './dispatch.component.html',
  styleUrls: ['./dispatch.component.css']
})
export class DispatchComponent implements OnInit {
  patientId;
  uSampleId;
  uUHID;
  pdd;
  newForm=true;
  isPddReadOnly="true";
  sampleForm=true;
  sample;
  obsrvtns;
  message;
  blkDetails;
  sampleDetails;
  constructor(  
    private dispatchService: DispatchService,
    private router  : Router) { 
      this.pdd=new patientDetails("","",0,"","",false);
    }

  ngOnInit(): void {
  }
  autofill(){
    this.sampleForm=true;
    this.newForm=false;
    
   // this.sA=[];
   // this.fillForm();
    console.log(this.pdd);

    this.dispatchService.getPatientByID(this.patientId).subscribe(
      (data)=>{
        console.log(data);
        this.pdd=data;
      },
      ()=>{

      }
    )
  }
  saveObs(){
    console.log(this.obsrvtns);
    let resp=this.dispatchService.updateReport(this.pdd);
      resp.subscribe((data)=>{
        console.log(data);
       });
    
    this.dispatchService.getBlkDetailsOfPatient(this.patientId).subscribe(
      (data)=>{
        console.log(data);
        this.blkDetails=data;
        console.log(this.blkDetails.length);
        for(let i=0;i<this.sampleDetails.length;i++){
          this.sampleDetails[i].lastUpdatedStation=5;
          let resp=this.dispatchService.updateSample(this.sampleDetails[i]);
          resp.subscribe((data)=>{
            console.log(data);
            this.message=data});
        }
      }
    );

    this.dispatchService.getSampleDetailsOfPatient(this.patientId).subscribe(
      (data)=>{
        console.log(data);
        this.sampleDetails=data;
        console.log(this.sampleDetails.length);
        for(let i=0;i<this.blkDetails.length;i++){
          this.blkDetails[i].last_updated_station=5;
          let resp=this.dispatchService.updateBlock(this.blkDetails[i]);
          resp.subscribe((data)=>{
            console.log(data);
            this.message=data});
      
        }
    });  

    
  
    
  }

  pendingPatients(){
    this.router.navigateByUrl('/pendingDispatchPatients');
  }

}
