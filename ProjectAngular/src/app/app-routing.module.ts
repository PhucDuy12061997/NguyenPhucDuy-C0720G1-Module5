import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {FontsizeComponent} from './fontsize/fontsize.component';
import {ListStudentComponent} from './list-student/list-student.component';
import {PetInformationComponent} from './pet-information/pet-information.component';
import {CalculatorComponent} from './calculator/calculator.component';
import {PickColorComponent} from './pick-color/pick-color.component';
import {NameCardComponent} from './name-card/name-card.component';
import {DemoCustomerComponent} from './demo-customer/demo-customer.component';
import {HackernewsComponent} from './hackernews/hackernews.component';
import {StudentDetailComponent} from './student-detail/student-detail.component';
import {ProgressBarComponent} from './progress-bar/progress-bar.component';
import {VoteAppComponent} from './vote-app/vote-app.component';
import {CountdownTimeComponent} from './countdown-time/countdown-time.component';
import {CusstomerDetailComponent} from './cusstomer-detail/cusstomer-detail.component';
import {TodoAppComponent} from './todo-app/todo-app.component';
import {LoginComponent} from './login/login.component';
import {RegisterFinalComponent} from './register-final/register-final.component';
import {LoginAccountComponent} from './login-account/login-account.component';

const routes: Routes = [
  {path: 'fontsize', component: FontsizeComponent},
  {path: 'list-student', component: ListStudentComponent},
  {path: 'pet', component: PetInformationComponent},
  {path: 'calculator', component: CalculatorComponent},
  {path: 'color', component: PickColorComponent},
  {path: 'name-card', component: NameCardComponent},
  {path: 'customer', component: DemoCustomerComponent},
  {path: 'hacker-news', component: HackernewsComponent},
  {path: 'student-detail', component: StudentDetailComponent},
  {path: 'progress-bar', component: ProgressBarComponent},
  {path: 'vote-app', component: VoteAppComponent},
  {path: 'countdown-time', component: CountdownTimeComponent},
  {path: 'customer-detail',component: CusstomerDetailComponent},
  {path: 'todo-app',component: TodoAppComponent},
  {path: 'login',component: LoginComponent},
  {path: 'register-final',component: RegisterFinalComponent},
  {path: 'login-account',component: LoginAccountComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
