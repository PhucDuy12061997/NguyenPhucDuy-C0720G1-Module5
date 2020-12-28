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

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
