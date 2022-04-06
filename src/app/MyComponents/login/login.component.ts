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
    if(this.userID == "admin" && this.password=="admin"){
      console.log("Login Success");
      this.router.navigateByUrl('/admin');

    }
    else if(this.userID=="tech1" && this.password=="tech1"){
      console.log("Login Success");
      this.router.navigateByUrl('/receivingStation');
    }
    else if(this.userID=="tech2" && this.password=="tech2"){
      console.log("Login Success");
      this.router.navigateByUrl('/grossingStation');
    }
  }
}
