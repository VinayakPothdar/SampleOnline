import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormsModule } from '@angular/forms';
import { AccountMangementService } from './accountmanagement.service';
import { AuthService } from './auth/auth.service';
import { HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http'
import { TokenInterceptor } from '../token.interceptor';
import { HttpClientModule } from '@angular/common/http';
import { ApiService } from './api.service';
import { AuthGuardService } from './auth/auth-guard.service';
import { TopnavbarComponent } from './topnavbar/topnavbar.component';
import { SidenavbarComponent } from './sidenavbar/sidenavbar.component';
import { FooternavbarComponent } from './footernavbar/footernavbar.component';
import { HomelayoutComponent } from './homelayout/homelayout.component';
import { HomeComponent } from './home/home.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    TopnavbarComponent,
    SidenavbarComponent,
    FooternavbarComponent,
    HomelayoutComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptor,

    multi: true
  }, AccountMangementService, AuthService, ApiService, AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
