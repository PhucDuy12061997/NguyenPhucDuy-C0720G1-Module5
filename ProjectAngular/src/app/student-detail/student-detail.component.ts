import {Component, Input, OnInit} from '@angular/core';
export interface Istudent {
  id: number;
  age: number;
  name: string;
  mark: number;
  image: string;
}
@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.component.html',
  styleUrls: ['./student-detail.component.css']
})
export class StudentDetailComponent implements OnInit {
@Input() student: Istudent;

  constructor() { }

  ngOnInit(): void {
  }
  onChangeMark(value: number) {
    this.student.mark = value;
  }

  onChangeImg(value: string) {
    this.student.image = value;
  }

}
