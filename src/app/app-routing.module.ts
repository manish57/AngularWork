import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CalculatorComponent } from './components/calculator/calculator.component';
import { HomeComponent } from './components/home/home.component';
import { StarComponent } from './components/star/star.component';
import { ViewChildComponent } from './components/view-child/view-child.component';
import { PanelHideComponent } from './components/panel-hide/panel-hide.component';
import { QuestionComponent } from './components/question/question.component';
import { PipeComponent } from './components/pipe/pipe.component';
import { TemplateFormComponent } from './components/template-form/template-form.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'assignment1',
    component: CalculatorComponent
  },
  {
    path: 'assignment2',
    component: StarComponent
  },
  {
    path: 'assignment3',
    component: ViewChildComponent
  },
  {
    path: 'assignment4',
    component: PanelHideComponent
  },
  {
    path: 'assignment5',
    component: QuestionComponent
  },
  {
    path: 'assignment6',
    component: PipeComponent
  },
  {
    path: 'assignment7',
    component: TemplateFormComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
