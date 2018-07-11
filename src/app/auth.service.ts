import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable()

export class AuthService {
  public  redirectUrl: Subject<string> = new Subject<string>();
public logoutClick: boolean = false;
public isRouteroutletLoaded :boolean = false;
  constructor(private http : HttpClient) { }
  public getToken(): string {

   return sessionStorage.getItem('token');
  }
  public logout():void
  {

    sessionStorage.setItem("token","");
    this.isRouteroutletLoaded = false;
    this.logoutClick = true;
    
  }
  public isAuthenticated(): boolean {
    // get the token

    const token :string = this.getToken();
  
    if(!token)
    {
   
      return false;
    }

    if(token=="null")
    {
   
      return false;
    }
  
    if(token==="null")
    {
   
      return false;
    }

    if(token=="empty")
    {
      return false;
    }
    else{
    return true;
    }
  }
  
}