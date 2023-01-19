import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { loginUser } from 'src/models/loginuser';
import { User } from 'src/models/Users';
import { AccountService } from '../_services/account.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @Input() usersFromNavComponent :any;
  model:any={};
  Isloggedin=false;
  currentUser$:Observable<loginUser | null>=of(null);
  formsGroup:FormGroup;

  constructor(public accountService:AccountService,private router:Router) { }

  ngOnInit(): void {
    this.currentUser$=this.accountService.currentUser$;
    this.initForm();
  }

  initForm(){
    this.formsGroup = new FormGroup({
      username:new FormControl(" ",[Validators.required]),
      password:new FormControl(" ",[Validators.required])
    })
  }

  // getCurrentuser(){
  //   this.accountService.currentUser$.subscribe({
  //     next:user=>this.loggedIn=!!user,
  //     error:error=>console.log(error)
  //   })
  // }

  login(){
    this.accountService.login(this.model).subscribe({
      next:response=>{
        console.log(response)
        this.Isloggedin=true;
        localStorage.setItem('user',JSON.stringify(response));
        this.router.navigateByUrl('/cars')
      },
      error:error=>console.log(error)
    })
    
  }

  logout(){
    this.router.navigateByUrl('/')
  }

  cancel(){

  }

}
