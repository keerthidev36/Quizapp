import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginStudentComponent } from './auth/login-student/login-student/login-student.component';
import { SignupStudentComponent } from './auth/login-student/signup-student/signup-student.component';
import { LoginTeacherComponent } from './auth/login-teacher/login-teacher/login-teacher.component';
import { SignupTeacherComponent } from './auth/login-teacher/signup-teacher/signup-teacher.component';
import { DemoquestionsComponent } from './demoquestions/demoquestions.component';
import { DemoquizComponent } from './demoquiz/demoquiz.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';


const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:'',component:HomeComponent},
  {path:"login",component:LoginComponent},
  {path:"register",component:RegisterComponent},
  {path:"demoquiz",component:DemoquizComponent},
  {path:"demoquestions",component:DemoquestionsComponent},
  {path:"login-student",component:LoginStudentComponent},
  {path:"signup-student",component:SignupStudentComponent},
  {path:"login-teacher",component:LoginTeacherComponent},
  {path:"signup-teacher",component:SignupTeacherComponent}
  // {path:'',redirectTo:'welcome',pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
