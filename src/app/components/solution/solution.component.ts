import { Component } from '@angular/core';

@Component({
  selector: 'app-solution',
  templateUrl: './solution.component.html',
  styleUrls: ['./solution.component.css'],
})
export class SolutionComponent{
  result: string = '';
  
  showSolution(value) {
    if( value == 4) {
      this.result = 'Correct Answer';
    }
    else {
      this.result = 'Wrong Answer';
    }
  }
}

