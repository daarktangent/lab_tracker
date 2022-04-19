import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VerificationService } from 'src/app/services/verification.service';
import { patientDetails } from '../details/patientDetails';
import { blockDetails } from '../details/blockDetails';

@Component({
  selector: 'app-verification',
  templateUrl: './verification.component.html',
  styleUrls: ['./verification.component.css']
})
export class VerificationComponent implements OnInit {
  patientId;
  blkReport="";
  sampleReport="";
  uSampleId;
  uUHID;
  pdd;
  newForm=true;
  isPddReadOnly="true";
  sampleForm=true;
  sample;
  obsrvtns;
  blk;
  blkDetails;
  sampleDetails;
  message;
  constructor(
    private router:Router,
    private verificationService: VerificationService,
  ) { 
      this.pdd=new patientDetails("","",0,"","",false);
  }

  ngOnInit(): void {
  }
  autofill(){
    this.sampleForm=true;
    this.newForm=false;
    console.log(this.pdd);

    this.verificationService.getPatientByID(this.patientId).subscribe(
      (data)=>{
        console.log(data);
        this.pdd=data;
      },
      ()=>{

      }
    )

    // this.verificationService.getPatient_sampleID(this.uSampleId).subscribe(
    //   (data) => {
    //     console.log(data);
    //     this.pdd = data;
        
    //   },
    //   () => {
    //     //here we check if the sample id belongs to the correct reg type or not
    //     // console.log(this.pdd.uhid.charCodeAt(0));
    //     // console.log("is digit"+ (this.pdd.uhid.charCodeAt(0)>=48 && this.pdd.uhid.charCodeAt(0)<=57));
        
        
    //   }
    // )
    this.generateBlkReport();
    this.generateSampleReport();
    this.verificationService.getOneSample(this.uSampleId).subscribe(
      (data)=>{
        console.log(data);
        this.sample=data;
      }
    )
  }
  saveObs(){
    console.log(this.obsrvtns);
    this.pdd.report=this.obsrvtns;
   
    let resp=this.verificationService.insertReport(this.pdd);
      resp.subscribe((data)=>{
        console.log(data);
        this.message=data});

    for(let i=0;i<this.sampleDetails.length;i++){
      this.sampleDetails[i].lastUpdatedStation=4;
      let resp=this.verificationService.updateSample(this.sampleDetails[i]);
      resp.subscribe((data)=>{
        console.log(data);
        this.message=data});
    }

    for(let i=0;i<this.blkDetails.length;i++){
      this.blkDetails[i].last_updated_station=4;
      let resp=this.verificationService.updateBlock(this.blkDetails[i]);
      resp.subscribe((data)=>{
        console.log(data);
        this.message=data});

    }
      
  }

  generateBlkReport(){
    //blkReport 
    this.verificationService.getBlkDetailsOfPatient(this.patientId).subscribe(
      (data)=>{
        console.log(data);
        this.blkDetails=data;
        console.log(this.blkDetails.length);
        for(let i=0;i<this.blkDetails.length;i++){
          this.blkReport+=this.blkDetails[i].remarks+" ";
          console.log(this.blkReport);
        }
      }
    )
    
  }

  generateSampleReport(){
    
    this.verificationService.getSampleDetailsOfPatient(this.patientId).subscribe(
      (data)=>{
        console.log(data);
        this.sampleDetails=data;
        console.log(this.sampleDetails.lenght);
        for(let i=0;i<this.sampleDetails.length;i++){
          this.sampleReport+=this.sampleDetails[i].remarks+" ";
          console.log(this.sampleDetails);
        }
      }
    )
    
  }

  pendingPatients(){
    this.router.navigateByUrl('/pendingPatients')
  }
}
