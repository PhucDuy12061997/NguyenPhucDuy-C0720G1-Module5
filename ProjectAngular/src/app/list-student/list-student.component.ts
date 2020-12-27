import {Component, OnInit} from '@angular/core';

export interface Istudent {
  id: number;
  age: number;
  name: string;
  mark: number;
  image: string;
}

@Component({
  selector: 'app-list-student',
  templateUrl: './list-student.component.html',
  styleUrls: ['./list-student.component.css']
})
export class ListStudentComponent implements OnInit {
  student: Istudent = {
    id: 1,
    age: 23,
    name: 'Phúc Duy',
    mark: 10,
    image: 'https://helpx.adobe.com/content/dam/help/en/stock/how-to/visual-reverse-image-search/jcr_content/main-pars/image/visual-reverse-image-search-v2_intro.jpg'
  };

  constructor() {
  }

  ngOnInit(): void {
  }

  onChangeMark(value: number) {
    this.student.mark = value;
  }

  onChangeImg(value: string) {
    this.student.image = value;
  }

}
