import {Component, Input, OnInit} from '@angular/core';

export interface Istudent {
  id: number;
  age: number;
  name: string;
  mark: number;
  result: string;
  image: string;
}

@Component({
  selector: 'app-list-student',
  templateUrl: './list-student.component.html',
  styleUrls: ['./list-student.component.css']
})
export class ListStudentComponent implements OnInit {
  @Input()
  student: Istudent[] = [{
    id: 1,
    age: 23,
    name: 'Phúc Duy',
    result: 'pass',
    mark: 10,

    image: 'https://helpx.adobe.com/content/dam/help/en/stock/how-to/visual-reverse-image-search/jcr_content/main-pars/image/visual-reverse-image-search-v2_intro.jpg'

  },
    {
      id: 2,
      age: 24,
      name: 'Phúc Duy 1',
      mark: 9,
      result: 'pass',
      image: 'https://helpx.adobe.com/content/dam/help/en/stock/how-to/visual-reverse-image-search/jcr_content/main-pars/image/visual-reverse-image-search-v2_intro.jpg'

    },
    {
      id: 3,
      age: 22,
      name: 'Phúc Duy 2',
      mark: 10,
      result: 'pass',
      image: 'https://helpx.adobe.com/content/dam/help/en/stock/how-to/visual-reverse-image-search/jcr_content/main-pars/image/visual-reverse-image-search-v2_intro.jpg'

    },
    {
      id: 4,
      age: 21,
      name: 'Phúc Duy 3',
      mark: 10,
      result: 'pass',
      image: 'https://helpx.adobe.com/content/dam/help/en/stock/how-to/visual-reverse-image-search/jcr_content/main-pars/image/visual-reverse-image-search-v2_intro.jpg'

    },

  ];

  constructor() {
  }

  ngOnInit(): void {
  }

  // onChangeMark(value: number) {
  //   this.student.mark = value;
  // }
  //
  // onChangeImg(value: string) {
  //   this.student.image = value;
  // }
  studentDetail: Istudent;


  getDetail(student: Istudent) {
    this.studentDetail=student;
  }
}
