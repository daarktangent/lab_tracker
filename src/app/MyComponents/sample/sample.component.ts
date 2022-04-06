import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import {  
  MatTableDataSource  
} from '@angular/material/table';  

import {  
  SelectionModel  
} from '@angular/cdk/collections';  

import {  
  MatDialog,  
  MatDialogConfig  
} from "@angular/material/dialog";  

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.css']
})
export class SampleComponent implements OnInit {
  patientID:string=""
  fullName:string=""
  email:string=""
  city:string=""
  constructor(private router: Router) { }

  ngOnInit(): void {
 }
 requests(){
  this.router.navigateByUrl('/requests');
 }
 sample(){
  this.router.navigateByUrl('/sample');
 }
 onSubmit(){
   
 }

}
