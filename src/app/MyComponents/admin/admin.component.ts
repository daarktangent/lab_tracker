import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder,FormControl} from '@angular/forms';
import { Employee } from '../details/Employee';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  empDetail !: FormGroup;
  empObj : Employee = new Employee();
  empList : Employee[] = []
  searchText : string;
  constructor(private formBuilder: FormBuilder,private empService: EmployeeService) { }

  ngOnInit(): void {
    this.empDetail = this.formBuilder.group({
      id:[''],
      name: [''],
      email: [''],
      phone: [''],
      role:['']
    })
  }
  addEmployee(){
    console.log(this.empDetail);
    this.empObj.id=this.empDetail.value.id;
    this.empObj.name=this.empDetail.value.name;
    this.empObj.email=this.empDetail.value.email;
    this.empObj.phone=this.empDetail.value.phone;
    this.empObj.role=this.empDetail.value.role;
    this.empService.addEmployee(this.empObj).subscribe(res=>{
      console.log(res);
      this.getAllEmployee();
  },err=>{
      console.log(err);
  });
}
getAllEmployee() {
  this.empService.getAllEmployee().subscribe(res=>{
      this.empList = res;
  },err=>{
    console.log("error while fetching data.")
  });
}
editEmployee(emp : Employee) {
  this.empDetail.controls['id'].setValue(emp.id);
  this.empDetail.controls['name'].setValue(emp.name);
  this.empDetail.controls['email'].setValue(emp.email);
  this.empDetail.controls['phone'].setValue(emp.phone);
  this.empDetail.controls['role'].setValue(emp.role);

}
updateEmployee() {

  this.empObj.id = this.empDetail.value.id;
  this.empObj.name = this.empDetail.value.name;
  this.empObj.phone = this.empDetail.value.phone;
  this.empObj.email = this.empDetail.value.email;
  this.empObj.role = this.empDetail.value.role;

  this.empService.updateEmployee(this.empObj).subscribe(res=>{
    console.log(res);
    this.getAllEmployee();
  },err=>{
    console.log(err);
  })

}
deleteEmployee(emp : Employee) {

  this.empService.deleteEmployee(emp).subscribe(res=>{
    console.log(res);
    alert('Employee deleted successfully');
    this.getAllEmployee();
  },err => {
    console.log(err);
  });

}


}
