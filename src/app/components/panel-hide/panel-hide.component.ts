import { Component } from '@angular/core';

@Component({
  selector: 'app-panelhide',
  templateUrl: './panel-hide.component.html',
  styleUrls: ['./panel-hide.component.css'],
})
export class PanelHideComponent{
  active: boolean = false;
  value1: boolean = true;
  value2: boolean = true;
  value3: boolean = true;
  
  onClick() { 
    this.active = !this.active;
  }

  onClick1() {
    this.value1 = !this.value1;
  }

  onClick2() {
    this.value2 = !this.value2;
  }

  onClick3() {
    this.value3 = !this.value3;
  }

  getColor1() {
    if (this.value1) {
      return '#ecf0f1';
    } else { return '#3498db';}
  }

  getColor2() {
    if (this.value2) {
      return '#ecf0f1';
    } else { return '#1abc9c';}
  }

  getColor3() {
    if (this.value3) {
      return '#ecf0f1';
    } else { return '#f1c40f';}
  }

}
