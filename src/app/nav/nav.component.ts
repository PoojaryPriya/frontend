import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { loginUser } from 'src/models/loginuser';
import { User } from 'src/models/Users';
import { AccountService } from '../_services/account.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  user: User;
  users:any;
  isAdminPage: boolean;
  loginMode=false;

  constructor(public accountService:AccountService,private router:Router) { }

  ngOnInit(): void {
  }

  isAuthenticated(){
    if(this.accountService.isAunthicated()){
      this.user=this.accountService.user;
      return true;
    }
    return false;
  }

  isAdmin(){
    if(this.accountService.user.IsAdmin){
      return true;
    }
    return false;
  }

  loginToggle(){
    this.loginMode=!this.loginMode;
  }

  logout(){
    this.accountService.logout();
    this.router.navigateByUrl('/');
  }
}
