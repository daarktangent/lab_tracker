import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VerificationService } from 'src/app/services/verification.service';

@Component({
  selector: 'app-pending-patients',
  templateUrl: './pending-patients.component.html',
  styleUrls: ['./pending-patients.component.css']
})
export class PendingPatientsComponent implements OnInit {

  pndng_patients;
  constructor(
    private router:Router,
    private verificationService: VerificationService,
  ) { 
    this.verificationService.getPendingPatients(3).subscribe(res=>{
      this.pndng_patients = res;
  },err=>{
    console.log("error while fetching data.")
  });

  }

  ngOnInit(): void {
  }


  verificationStation(){
    this.router.navigateByUrl('/verification');
  }
}
