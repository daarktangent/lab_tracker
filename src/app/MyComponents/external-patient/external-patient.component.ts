import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { patientDetails } from '../details/patientDetails';
import { ReceivingService } from 'src/app/services/receiving.service';
@Component({
  selector: 'app-external-patient',
  templateUrl: './external-patient.component.html',
  styleUrls: ['./external-patient.component.css']
})
export class ExternalPatientComponent implements OnInit {
  message;
  pdd;
  constructor(private router: Router,
    private receivingService: ReceivingService) {
      this.pdd=new patientDetails("", "",0, "","", false);
     }

  ngOnInit(): void {
  }

  savePDetails(){
    let resp=this.receivingService.insertPD_manual(this.pdd);
      resp.subscribe((data)=>{
        console.log(data);
        this.message=data});
      console.log(this.message);
  }

}
