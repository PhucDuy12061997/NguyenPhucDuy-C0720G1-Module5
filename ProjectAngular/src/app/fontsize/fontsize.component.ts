import {Component, OnInit} from '@angular/core';

export interface Istudent {
  id: number;
  name: string;
  age:number,
  mark: number;
  image: string;
}

@Component({
  selector: 'app-a',
  templateUrl: './fontsize.component.html',
  styleUrls: ['./fontsize.component.css']
})
export class FontsizeComponent implements OnInit {
  fontSize = 14;

  onChange(value) {
    this.fontSize = value;
  }

  constructor() {
  }

  ngOnInit(): void {
  }

}
