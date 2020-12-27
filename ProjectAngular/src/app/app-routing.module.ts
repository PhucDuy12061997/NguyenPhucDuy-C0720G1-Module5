import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {FontsizeComponent} from './fontsize/fontsize.component';
import {ListStudentComponent} from './list-student/list-student.component';
import {PetInformationComponent} from './pet-information/pet-information.component';
import {CalculatorComponent} from './calculator/calculator.component';
import {PickColorComponent} from './pick-color/pick-color.component';

const routes: Routes = [
  {path: 'fontsize', component: FontsizeComponent},
  {path: 'list-student', component: ListStudentComponent},
  {path: 'pet', component: PetInformationComponent},
  {path: 'calculator', component: CalculatorComponent},
  {path: 'color', component: PickColorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
