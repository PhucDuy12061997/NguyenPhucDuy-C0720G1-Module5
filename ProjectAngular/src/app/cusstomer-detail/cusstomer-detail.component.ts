import {Component, Input, OnInit} from '@angular/core';

interface Icustomer {
// {customerNo: 1, name: 'Nguyen Phuc Duy ', address: 'Son Tinh 1', city: 'Quang Ngai 1', country: 'VietNam 1', state: 'mien Trung'},
  no: number;
  name: string;
  age: number;
  phone: string;
  address: string;
  city: string;
  country: string;
  state: string;
  image: string;
}

@Component({
  selector: 'app-cusstomer-detail',
  templateUrl: './cusstomer-detail.component.html',
  styleUrls: ['./cusstomer-detail.component.css']
})
export class CusstomerDetailComponent implements OnInit {
  @Input() customer: Icustomer;

  constructor() {
  }

  ngOnInit(): void {
  }

  onChangeAge(value: number) {
    this.customer.age;
  }

  onChangeImage(value: string) {
    this.customer.image;
  }
}
