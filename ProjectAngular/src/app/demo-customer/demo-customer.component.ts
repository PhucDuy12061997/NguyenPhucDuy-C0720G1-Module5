import {Component, OnInit} from '@angular/core';
import {Customer} from '../Customer';

@Component({
  selector: 'app-demo-customer',
  templateUrl: './demo-customer.component.html',
  styleUrls: ['./demo-customer.component.css']
})
export class DemoCustomerComponent implements OnInit {
  customers: Customer[] = [
    {
      no: 1,
      name: 'Nguyen Phuc Duy ',
      age: 18,
      image: 'https://hopamchuan.com/node/get_artist_image/flower',
      phone: 25675678567,
      address: 'Son Tinh 1',
      city: 'Quang Ngai 1',
      country: 'VietNam 1',
      state: 'Mien Trung',
    },
    {
      no: 2,
      name: 'Nguyen Phuc Duy ',
      age: 18,
      image: 'https://hopamchuan.com/node/get_artist_image/flower',
      phone: 25675678568,
      address: 'Son Tinh 1',
      city: 'Quang Ngai 1',
      country: 'VietNam 1',
      state: 'mien Trung'
    },
    {
      no: 3,
      name: 'Nguyen Phuc Duy ',
      age: 18,
      image: 'https://hopamchuan.com/node/get_artist_image/flower',
      phone: 25675678567,
      address: 'Son Tinh 1',
      city: 'Quang Ngai 1',
      country: 'VietNam 1',
      state: 'mien Trung'
    },

  ];
  no: number;
  name: string;
  age: number;
  phone: number;
  address: string;
  city: string;
  country: string;
  state: string;
  image: string;

  constructor() {
  }

  ngOnInit(): void {
  }

  CustomerDetai: Customer;

  getDetail(customer: Customer) {
    this.CustomerDetai = customer;
  }

  // no: number;
  // name: string;
  // age: number;
  // phone: number;
  // address: string;
  // city: string;
  // country: string;
  // state: string;
  // image: string;

  getCreate() {
    this.customers.push({
      no: this.no,
      name: this.name,
      age: this.age,
      phone: this.phone,
      address: this.address,
      city: this.city,
      country: this.country,
      state: this.state,
      image: this.image
    });
  }

}
