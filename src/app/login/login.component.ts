import { Component, OnInit, AfterViewInit } from '@angular/core';
import { LoginModel } from '../models/loginmodel.model';
import { AccountMangementService } from '../accountmanagement.service';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, AfterViewInit {
  public IsloginSucess = true;
  public showLoginForm: boolean = true;
  public loginModel: LoginModel = new LoginModel();
  public loginprocessStarted = false;
  public RedirectUrl: string;
  constructor(public accountManagementService: AccountMangementService, private router: Router, private authService: AuthService) {
    this.authService.redirectUrl.subscribe(
      response => {
        this.RedirectUrl = response;
      }
    );
    this.accountManagementService.OnLoginCompletedEvent.subscribe(IsValidUser => { this.PostLoginRequest(IsValidUser) });
  }

  PostLoginRequest(isvalidUser: boolean) {
    this.loginprocessStarted = false;
    this.IsloginSucess = isvalidUser;
  }

  ngOnInit() {
  }
  Login() {

    this.loginprocessStarted = true;
    this.accountManagementService.ValidateLoginAndSetToken(this.loginModel.username, this.loginModel.password);
  }
  ngAfterViewInit() {
    if (this.authService.isAuthenticated) {

    }
  }
}
