import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontsizeComponent } from './fontsize/fontsize.component';
import { ListStudentComponent } from './list-student/list-student.component';
import { PetInformationComponent } from './pet-information/pet-information.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { PickColorComponent } from './pick-color/pick-color.component';
// import { PetInformationComponent } from './pet-information/pet-information.component';

@NgModule({
  declarations: [
    AppComponent,
    FontsizeComponent,
    ListStudentComponent,
    PetInformationComponent,
    CalculatorComponent,
    PickColorComponent,
    // PetInformationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
