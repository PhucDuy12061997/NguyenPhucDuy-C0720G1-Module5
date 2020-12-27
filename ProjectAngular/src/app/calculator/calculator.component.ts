import {Component, OnInit} from '@angular/core';


@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  soA: number;
  soB: number;
  ketQua: number;
  operator = '+';

  constructor() {
  }

  onSoAChange(value) {
    this.soA = Number(value);
  }

  onSoBChange(value) {
    this.soB = Number(value);
  }

  onSelectChange(value) {
    this.operator = value;
  }

  calculate() {
    switch (this.operator) {
      case '*':
        this.ketQua = this.soA * this.soB;
        break;
      case '/':
        this.ketQua = this.soA / this.soB;
        break;
      case '+':
        this.ketQua = this.soA + this.soB;
        break;
      case '-':
        this.ketQua = this.soA - this.soB;
        break;

    }
  }

  ngOnInit(): void {
  }
}
