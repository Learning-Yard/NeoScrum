import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  {
    path:'',
    redirectTo: 'login',
    pathMatch: 'full' 
},
  {path:'login', component: LoginComponent },
  // {path:'dashboard', component: DashboardComponent },
  {path:'dashboard/:id', canActivate : [AuthGuard], component: DashboardComponent },
  {path:'sign-up', component: SignUpComponent },
  {path:'feedback', component: FeedbackComponent }      
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [LoginComponent , DashboardComponent , SignUpComponent , FeedbackComponent]
