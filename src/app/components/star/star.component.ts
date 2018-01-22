import { Component } from '@angular/core';
import {FormGroup, FormControl} from "@angular/forms";
import {RatingComponent} from '../rating/rating.component';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css'],
})
export class StarComponent{
  active: boolean = false;
  rate:number;
  
  constructor() {
    this.rate = 2;
  }
  
  RecievedParameters(value){
    this.rate = value;
  }
  
  onClick() { 
    this.active = !this.active;
  }

  form = new FormGroup({
    myRating: new FormControl('')
  });
}
