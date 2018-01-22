import { Component } from '@angular/core';
import { CalcService } from '../../services/calc.service';

@Component({
  selector: 'app-calc',
  templateUrl: './calc.component.html',
  styleUrls: ['./calc.component.css'],
})
export class CalcComponent{
  first:number;
  second:number;
  result: number;

  constructor(public calcService: CalcService) { 

   }
  
  add() {
    this.result = this.calcService.getAddition(this.first,this.second);
  }
  
  sub() {
    this.result = this.calcService.getSubstraction(this.first,this.second);
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

}
