import { Component, OnInit } from '@angular/core';
import { CalcService } from '../../services/calc.service';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  first:number;
  second:number;
  result: number;
  error: string;

  constructor(public calcService: CalcService) { 

   }
  
  add() {
    this.result = this.calcService.getAddition(this.first,this.second);
  }
  
  sub() {
    this .result = this.calcService.getSubstraction(this.first,this.second);
  }
  
  mul() {
    this.result = this.calcService.getMultiplication(this.first,this.second);
  }

  div() {
    this.result = this.calcService.getDivision(this.first,this.second);
  }

  reset() {
   this.first = null;
   this.second = null;
   this.result = null;    
  }

  ngOnInit() {
  }

}
