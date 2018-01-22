import { Component, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { SolutionComponent } from '../solution/solution.component'

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css'],
})
export class QuestionComponent{
  myRadio: string = '';
  
  @ViewChild(SolutionComponent)
  public solutionComponent: SolutionComponent;

  showAnswer(value) {
    this.solutionComponent.showSolution(value);
  }
}


