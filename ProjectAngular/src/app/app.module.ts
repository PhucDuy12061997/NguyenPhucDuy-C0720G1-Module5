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
import {FormsModule} from '@angular/forms';
import { StudentDetailComponent } from './student-detail/student-detail.component';
// import { PetInformationComponent } from './pet-information/pet-information.component';

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
    // PetInformationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
