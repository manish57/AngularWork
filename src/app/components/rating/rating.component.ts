import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css'],
})
export class RatingComponent{
  @Input('rate') rate;
  @Output('updateRate') updateRate = new EventEmitter();
  public ranges:Array<number> = [1,2,3,4,5];
  
  update(value) {
    this.rate = value;
    this.updateRate.emit(value);
  }
}
