import { Component, Inject, OnInit } from '@angular/core';
import { DispatchService } from 'src/app/services/dispatch.service';
import { patientDetails } from '../details/patientDetails';
import { Router } from '@angular/router';
import { EmailDetails } from '../details/EmailDetails';
import {MatDialog, MatDialogRef,MAT_DIALOG_DATA} from '@angular/material/dialog';
import { sampleDetails } from '../details/sampleDetails';

export interface DialogData {
  title:string;
  content:string;
}

@Component({
  selector: 'app-dispatch',
  templateUrl: './dispatch.component.html',
  styleUrls: ['./dispatch.component.css']
})
export class DispatchComponent implements OnInit {
  patientId;
  uSampleId;
  uUHID;
  pdd:patientDetails=new patientDetails();
  newForm=true;
  isPddReadOnly="true";
  sampleForm=true;
  sample;
  obsrvtns;
  message;
  blkDetails;
  sampleDetails;
  sD:sampleDetails=new sampleDetails();
  emailDetails:EmailDetails=new EmailDetails();
  sampleID;
  constructor(  
    private dispatchService: DispatchService,
    private router  : Router,
    public dialog: MatDialog) { 
     // this.pdd=new patientDetails("","","",0,"","",false);
      
    }
  messageReport;

  ngOnInit(): void {
  }
  autofill(){
    this.sampleForm=true;
    this.newForm=false;
    
   // this.sA=[];
   // this.fillForm();
    console.log(this.sD);
    this.dispatchService.getPatient_sampleID(this.sampleID).subscribe((data)=>{
      console.log(data);
      this.pdd=data
     });

    this.dispatchService.getOneSample(this.sampleID).subscribe(
      (data)=>{
        console.log(data);
        this.sD=data;
      },
      ()=>{

      }
    )
  }
  saveObs(){
    console.log(this.obsrvtns);
    
  
    // //updating report
    // let resp=this.dispatchService.updateReport(this.pdd);
    //   resp.subscribe((data)=>{
    //     console.log(data);
    //     this.messageReport=data
    //    });
    //updating station of block
    this.dispatchService.getBlkDetailsOfSample(this.sampleID).subscribe(
      (data)=>{
        console.log(data);
        this.blkDetails=data;
        console.log(this.blkDetails.length);
        for(let i=0;i<this.blkDetails.length;i++){
          this.blkDetails[i].lastUpdatedStation=5;
          let resp=this.dispatchService.updateBlock(this.blkDetails[i]);
          resp.subscribe((data)=>{
            console.log(data);
            this.message=data});
        }
      }
    );
    //updating sample station
    // this.dispatchService.getSampleDetailsOfPatient(this.patientId).subscribe(
    //   (data)=>{
    //     console.log(data);
    //     this.sampleDetails=data;
    //     console.log(this.sampleDetails.length);
    //     for(let i=0;i<this.blkDetails.length;i++){
    //       this.blkDetails[i].last_updated_station=5;
    //       let resp=this.dispatchService.updateBlock(this.blkDetails[i]);
    //       resp.subscribe((data)=>{
    //         console.log(data);
    //         this.message=data});
      
    //     }
    // });  

    this.sD.lastUpdatedStation=5;
    this.dispatchService.updateSample(this.sD).subscribe(
      (data)=>{
        console.log(this.sD);
      }
    )


    //sending email

    this.emailDetails.to=this.pdd.email;
    this.emailDetails.subject="Lab Report";
    this.emailDetails.message=this.sD.remarks;
    let resp=this.dispatchService.sendEmail(this.emailDetails);
      resp.subscribe((data)=>{
        console.log(data);
       });

    if(resp)
      this.openDialog(true);
    else
      this.openDialog(false);
  
    
  }

  pendingPatients(){
    this.router.navigateByUrl('/pendingDispatchPatients');
  }

  openDialog(response) {
   
    if(response)
    {
      this.dialog.open(DialogElementsExampleDialog);
    }
    else{
      const dialogRef = this.dialog.open(DialogUnsuccess, {
        width: '300px',
        data: {}
      });
    }
    
  }
  

  logout(){
    this.router.navigateByUrl('/login')
  }

}

@Component({
  selector: 'dialog-elements-example-dialog',
  templateUrl: 'dialog-elements-example-dialog.html',
})
export class DialogElementsExampleDialog { 
  constructor(
    public dialogRef: MatDialogRef<DialogElementsExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
  ){}
  close(){
    this.dialogRef.close();
  }
  
}

@Component({
  selector: 'dialog-elements-example-dialog',
  templateUrl: 'dialog-unsuccess.html',
})
export class DialogUnsuccess { 
  constructor(
    public dialogRef: MatDialogRef<DialogUnsuccess>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
  ){}
  close(){
    this.dialogRef.close();
  }
}
