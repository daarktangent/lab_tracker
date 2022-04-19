import { Component, OnInit, ViewChild, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';

import { MatPaginator } from '@angular/material/paginator';
import {SelectionModel} from '@angular/cdk/collections';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import {LiveAnnouncer} from '@angular/cdk/a11y';
import {AfterViewInit} from '@angular/core';
import {MatSort, Sort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {patientDetails} from '../details/patientDetails'
import { ReceivingService } from 'src/app/services/receiving.service';

 @Component({
    selector: 'app-requests-his',
    templateUrl: './requests-his.component.html',
    styleUrls: ['./requests-his.component.css']
  })
  export class RequestsHISComponent implements OnInit {

  pD_list;

  constructor(private _liveAnnouncer: LiveAnnouncer,
    private router :Router,
    private receivingService: ReceivingService) {}

  @ViewChild(MatSort) sort: MatSort;

  ngOnInit(): void {
    
       }

  getAllRequests(){
    this.receivingService.getAllRequests().subscribe(res=>{
      this.pD_list = res;
  },err=>{
    console.log("error while fetching data.")
  });

  }
  addRequest(patient:patientDetails){
    console.log(patient);
    patient.accept=true;
  
    console.log(patient);
    this.receivingService.updateAccept(patient).subscribe(res=>{
      console.log(res);
      this.getAllRequests();
  },err=>{
      console.log(err);
  });
    

  }
  deleteRequest(patient){

  }
  recStation(){
    this.router.navigateByUrl('/receivingStation');
  }

}

