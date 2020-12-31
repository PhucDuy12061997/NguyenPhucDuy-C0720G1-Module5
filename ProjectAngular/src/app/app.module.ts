import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontsizeComponent } from './fontsize/fontsize.component';
import { ListStudentComponent } from './list-student/list-student.component';
import { PetInformationComponent } from './pet-information/pet-information.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { PickColorComponent } from './pick-color/pick-color.component';
import { NameCardComponent } from './name-card/name-card.component';
import { HackernewsComponent } from './hackernews/hackernews.component';
import { DemoCustomerComponent } from './demo-customer/demo-customer.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { StudentDetailComponent } from './student-detail/student-detail.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { VoteAppComponent } from './vote-app/vote-app.component';
import { CountdownTimeComponent } from './countdown-time/countdown-time.component';
import { CusstomerDetailComponent } from './cusstomer-detail/cusstomer-detail.component';
import { TodoAppComponent } from './todo-app/todo-app.component';
import { LoginComponent } from './login/login.component';
import { RegisterFinalComponent } from './register-final/register-final.component';
import { LoginAccountComponent } from './login-account/login-account.component';

@NgModule({
  declarations: [
    AppComponent,
    FontsizeComponent,
    ListStudentComponent,
    PetInformationComponent,
    CalculatorComponent,
    PickColorComponent,
    NameCardComponent,
    HackernewsComponent,
    DemoCustomerComponent,
    StudentDetailComponent,
    ProgressBarComponent,
    VoteAppComponent,
    CountdownTimeComponent,
    CusstomerDetailComponent,
    TodoAppComponent,
    LoginComponent,
    RegisterFinalComponent,
    LoginAccountComponent,

    // PetInformationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
