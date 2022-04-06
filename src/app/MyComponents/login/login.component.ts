import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userID:string="";
  password:string="";
  
  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  onSubmit(){
    if(this.userID == "Admin" && this.password=="pwd"){
      console.log("Login Success");
      this.router.navigateByUrl('/receivingStation');

    }
  }
}
