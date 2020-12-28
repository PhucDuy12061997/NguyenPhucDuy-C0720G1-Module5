import {Component, OnInit} from '@angular/core';
import {Customer} from '../Customer';

@Component({
  selector: 'app-demo-customer',
  templateUrl: './demo-customer.component.html',
  styleUrls: ['./demo-customer.component.css']
})
export class DemoCustomerComponent implements OnInit {
  customers: Customer[] = [
    {customerNo: 1, name: 'Nguyen Phuc Duy ', address: 'Son Tinh 1', city: 'Quang Ngai 1', country: 'VietNam 1', state: 'mien Trung'},
    {customerNo: 2, name: 'Nguyen Phuc Duy 1 ', address: 'Son Tinh 2', city: 'Quang Ngai 2', country: 'VietNam 2', state: 'mien Trung'},
    {customerNo: 3, name: 'Nguyen Phuc Duy 2 ', address: 'Son Tinh 3', city: 'Quang Ngai 3', country: 'VietNam 3', state: 'mien Trung'},
    {customerNo: 4, name: 'Nguyen Phuc Duy 3 ', address: 'Son Tinh 4', city: 'Quang Ngai4 ', country: 'VietNam 4', state: 'mien Trung'}
  ]

  constructor() {
  }

  ngOnInit(): void {
  }

}
