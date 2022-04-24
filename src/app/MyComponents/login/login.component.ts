import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { loginRequest } from '../details/loginRequest';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userID:string="";
  password:string="";
  message;
  form={
    email:'',
    password:'',
    role :''
  }
  hide=true;
  //form=new loginRequest();
  constructor(private router: Router,
    private loginService: LoginService) {
      
     }

  ngOnInit(): void {
  }

  onSubmit(){
    
    
    // if(this.userID == "admin" && this.password=="admin"){
    //   console.log("Login Success");
    //   this.router.navigateByUrl('/admin');

    // }
    // else if(this.userID=="tech1" && this.password=="tech1"){
    //   console.log("Login Success");
    //   this.router.navigateByUrl('/receivingStation');
    // }
    // else if(this.userID=="tech2" && this.password=="tech2"){
    //   console.log("Login Success");
    //   this.router.navigateByUrl('/grossingStation');
    // }
    console.log(JSON.stringify(this.form));
      let resp=this.loginService.employeeLogin(this.form);
      resp.subscribe((data)=>{
        this.message=data
        console.log(this.message)
        if(this.message!=null){
          if(this.form.role == "Admin")
            this.router.navigateByUrl('/admin')
          else if(this.form.role == "Receptionist")
            this.router.navigateByUrl('/receivingStation')
          else if(this.form.role == "Technician")
            this.router.navigateByUrl('/grossingStation')
          else if(this.form.role == "Doctor")
            this.router.navigateByUrl('/doctorIndex')
          else if(this.form.role == "HIS")
            this.router.navigateByUrl('/addPatientHIS')
        }
        
        else
          alert("Login Failed")
      });

      
     
  }

}


