import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { APP_BASE_HREF } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuardService as AuthGuard } from './auth/auth-guard.service';
import { HomelayoutComponent } from './homelayout/homelayout.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomelayoutComponent, canActivate: [AuthGuard],
    children: [
      {
        path: '',
        component: HomeComponent
      },
      {
        path:'dashboard',
        component: DashboardComponent
      }
    ]
  },
  {
    path: '',
    component: LoginComponent,
    children: [
      {
        path: 'login',
        component: LoginComponent
      }
    ]
  }
];
@NgModule({
  providers: [{ provide: APP_BASE_HREF, useValue: '/' }],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
