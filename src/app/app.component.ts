import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { loginUser } from 'src/models/loginuser';
import { User } from 'src/models/Users';
import { AccountService } from './_services/account.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{ 
  title = 'Car Rental System';
  users:any;

  constructor(private http:HttpClient,private accountService:AccountService){}
  ngOnInit(): void {
    // this.getUser();
    this.setCurrentUser();
  }

  // getUser(){
  //   this.http.get('https://localhost:5002/api/users').subscribe({
  //     next: response=>this.users=response,
  //     error: error=>console.log(error),
  //     complete:()=>console.log("Request has completed")
  //   })
  // }

  setCurrentUser() {
    const userString=localStorage.getItem('user');
    if(!userString) return;
    const user:loginUser=JSON.parse(userString);
    this.accountService.setCurrentUser(user);
  }

  

}
