import { Component, OnInit } from '@angular/core';
import { GrossingService } from 'src/app/services/grossing.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-pending-samples',
  templateUrl: './pending-samples.component.html',
  styleUrls: ['./pending-samples.component.css']
})
export class PendingSamplesComponent implements OnInit {

  pndng_samples;
  constructor(
    private router:Router,
    private grossingService: GrossingService,
  ) { 
    this.grossingService.getPendingSamples().subscribe(res=>{
      this.pndng_samples = res;
  },err=>{
    console.log("error while fetching data.")
  });

  }

  ngOnInit(): void {
  }

  getAllPendingSamples(){
    
  }
  grossingStation(){
    this.router.navigateByUrl('/grossingStation');
  }

}
