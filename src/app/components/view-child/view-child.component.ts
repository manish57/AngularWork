import { Component, ViewChild, ElementRef } from '@angular/core';
import { CalcComponent } from '../calc/calc.component';

@Component({
  selector: 'app-viewchild',
  templateUrl: './view-child.component.html',
  styleUrls: ['./view-child.component.css'],
})
export class ViewChildComponent{
 
  @ViewChild(CalcComponent)
  public calcComponent: CalcComponent;
 

  addition() {
    this.calcComponent.add();
  }

  substraction() {
    this.calcComponent.sub();
  }

  multiplication() {
    this.calcComponent.mul();
  }

  division() {
    this.calcComponent.div();
  }

  resetall() {
    this.calcComponent.reset();
  }
}
