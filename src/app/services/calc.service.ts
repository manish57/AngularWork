import { Injectable } from '@angular/core';

@Injectable()
export class CalcService {

  constructor() { }
  
  getAddition(a,b) {
    return (+a + +b);
  }

  getSubstraction(a,b) {
    return (a - b);
  }

  getMultiplication(a,b) {
    return (a * b);
  }

  getDivision(a,b) {
    return (a / b);
  }

}
