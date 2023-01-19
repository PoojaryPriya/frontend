import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject,map, Observable } from 'rxjs';
import { loginUser } from 'src/models/loginuser';
import { environment } from 'src/environments/environment';
import { User } from 'src/models/Users';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  user:User;
  // ={
  //   // Id:0,
  //   // Username:'',
  //   // IsAdmin:false,
  //   // Address:'',
  //   // Phoneno:0
  // };
  // user:User;
  loginuser:loginUser;
  baseUrl=environment.baseUrl;
  private currentUserSource=new BehaviorSubject<loginUser | null>(null);
  currentUser$=this.currentUserSource.asObservable();

  constructor(private http:HttpClient) { }

  login(model:any){
    return this.http.post<loginUser>(this.baseUrl+'account/login',model).pipe(
      map((response:loginUser)=>{
        const user=response;
        if(user){
          localStorage.setItem('user',JSON.stringify(user));
          this.currentUserSource.next(user);
        }
      })
    )
  }

  register(model:any){
    return this.http.post<User>(this.baseUrl+'account/register',model).pipe(
      map(user=>{
        if(user){
          localStorage.setItem('user',JSON.stringify(user));
          // this.currentUserSource.next(user);
        }
        return user;
      })
    )
  }

  logout()
  {
    localStorage.removeItem('user');
    this.currentUserSource.next(null);
  }

  setCurrentUser(user:loginUser){
    this.currentUserSource.next(user);
  }

  isAunthicated(){
    if(localStorage.getItem('token')){
      return true;
    }else{
      return false;
    }
  }

  isAdmin(token:any){
    let result=false;
    token.Claims?.toString()
    .split(',')
    ?.map((cliam:string)=>{
      if(cliam.toLocaleLowerCase()==='admin'){
        result=true
      }
    });
    return result;
  }
}
