import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {min} from 'rxjs/operators';

interface Istudent {
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
    ,
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
  formCreate: FormGroup;


  constructor(private  formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.formCreate = this.formBuilder = ({
      id: ['', Validators.required()),
      age: ['',Validators.required()],
      name: ['',Validators.required()],

  ]
  })
  }


  studentDetail: Istudent;


  getDetail(student: Istudent) {
    this.studentDetail = student;
  }

  getCreateNew() {
    this.student.push({
      id: this.id,
      age: this.age,
      name: this.name,
      mark: this.mark,
      result: this.result,
      image: this.image,
    });
  }
}
