import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DispatchService } from 'src/app/services/dispatch.service';

@Component({
  selector: 'app-pending-patients-dispatch',
  templateUrl: './pending-patients-dispatch.component.html',
  styleUrls: ['./pending-patients-dispatch.component.css']
})
export class PendingPatientsDispatchComponent implements OnInit {

  pndng_patients;
  constructor(
    private router:Router,
    private dispatchService: DispatchService,
  ) { 
    this.dispatchService.getPendingPatients(4).subscribe(res=>{
      this.pndng_patients = res;
  },err=>{
    console.log("error while fetching data.")
  });

  }

  ngOnInit(): void {
  }

  getAllPendingPatients(){
    
  }
  dispatchStation(){
    this.router.navigateByUrl('/dispatch');
  }

}
