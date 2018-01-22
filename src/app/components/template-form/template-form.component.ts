import { Component } from '@angular/core';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent{
  categories = ['FreshFood', 'Bakery', 'General'];

  submit(form){
    console.log(form);
  }
}
