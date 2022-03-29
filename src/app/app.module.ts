import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { DemoquizComponent } from './demoquiz/demoquiz.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DemoquestionsComponent } from './demoquestions/demoquestions.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginStudentComponent } from './auth/login-student/login-student/login-student.component';
import { SignupStudentComponent } from './auth/login-student/signup-student/signup-student.component';
import { LoginTeacherComponent } from './auth/login-teacher/login-teacher/login-teacher.component';
import { SignupTeacherComponent } from './auth/login-teacher/signup-teacher/signup-teacher.component';
import { ChangeBgDirective } from './change-bg.directive';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    DemoquizComponent,
    LoginComponent,
    RegisterComponent,
    DemoquestionsComponent,
    LoginStudentComponent,
    SignupStudentComponent,
    LoginTeacherComponent,
    SignupTeacherComponent,
    ChangeBgDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
