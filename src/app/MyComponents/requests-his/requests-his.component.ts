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
// @Component({
//   selector: 'app-requests-his',
//   templateUrl: './requests-his.component.html',
//   styleUrls: ['./requests-his.component.css']
// })
// export class RequestsHISComponent implements OnInit {

//   columnsToDisplay = [
//     "index",
    
//     "sampleId",
//     "patientDemographicDetails.uhid",
//     "patientDemographicDetail.name",
//     "patientDemographicDetail.age",
//     "patientDemographicDetail.sex",
//     "drName",
//     "status",
//     "reqDate",
//     "sampleType",
//     "Test",
//     "Action"
//   ];
//   columnsToFilter = [
    
//     "samples",
//     "patientDemographicDetail.uhid",
//     "patientDemographicDetail.name",
//     "patientDemographicDetail.age",
//     // "patientDemographicDetail.sex",
//     "patientDemographicDetail.hospitalName",
//     "drName",
//     "status",
//     "reqDate",
//     "sampleType"
//   ];

//   @ViewChild(MatSort, {static: true}) sort: MatSort;
//   @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
//   @Output() alertLink:EventEmitter<any> = new EventEmitter();

//   mergeActive=false;
//   firstSelection = null;

//   constructor(
//     private router: Router,
//     // private mapSampleService : MapSampleService,
//     private snackBar : MatSnackBar,
//     private dialog : MatDialog,
//     ) { }


//   ngOnInit(): void {
//   }
//   requests(){
//     this.router.navigateByUrl('/requests');
//   }
//   sample(){
//     this.router.navigateByUrl('/sample');
//   }

// }


// export interface PeriodicElement {
//   name: string;
//   position: number;
//   weight: number;
//   symbol: string;
// }

// const ELEMENT_DATA: PeriodicElement[] = [
//   {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
//   {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
//   {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
//   {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
//   {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
//   {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
//   {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
//   {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
//   {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
//   {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
// ];

/**
 * @title Table with sorting
 */
 @Component({
    selector: 'app-requests-his',
    templateUrl: './requests-his.component.html',
    styleUrls: ['./requests-his.component.css']
  })
  export class RequestsHISComponent implements OnInit {
  // displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  // dataSource = new MatTableDataSource(ELEMENT_DATA);
  pD_list;

  constructor(private _liveAnnouncer: LiveAnnouncer,
    private receivingService: ReceivingService) {}

  @ViewChild(MatSort) sort: MatSort;

  // ngAfterViewInit() {
  //   this.dataSource.sort = this.sort;
  // }

  /** Announce the change in sort state for assistive technology. */
  // announceSortChange(sortState: Sort) {
  //   // This example uses English messages. If your application supports
  //   // multiple language, you would internationalize these strings.
  //   // Furthermore, you can customize the message to add additional
  //   // details about the values being sorted.
  //   if (sortState.direction) {
  //     this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
  //   } else {
  //     this._liveAnnouncer.announce('Sorting cleared');
  //   }
  // }

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

}

