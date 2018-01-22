import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { StarRatingModule } from 'angular-star-rating';

import { AppComponent } from './app.component';
import { CalculatorComponent } from './components/calculator/calculator.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { StarComponent } from './components/star/star.component';
import { RatingComponent } from './components/rating/rating.component';
import { CalcComponent } from './components/calc/calc.component';
import { ViewChildComponent } from './components/view-child/view-child.component';
import { PanelHideComponent } from './components/panel-hide/panel-hide.component';
import { QuestionComponent } from './components/question/question.component';
import { SolutionComponent } from './components/solution/solution.component';
import { PipeComponent } from './components/pipe/pipe.component';
import { TemplateFormComponent } from './components/template-form/template-form.component';

import { NumberToWordsPipe } from './number-to-words.pipe';
import { InputFormatDirective } from './input-format.directive';
import { GreaterThanDirective } from './greater-than.directive';

import { CalcService } from './services/calc.service';

@NgModule({
  declarations: [
    AppComponent,
    CalculatorComponent,
    NavbarComponent,
    HomeComponent,
    StarComponent,
    RatingComponent,
    CalcComponent,
    ViewChildComponent,
    PanelHideComponent,
    QuestionComponent,
    SolutionComponent,
    PipeComponent,
    TemplateFormComponent,
    NumberToWordsPipe,
    InputFormatDirective,
    GreaterThanDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    StarRatingModule.forRoot()
  ],
  providers: [CalcService],
  bootstrap: [AppComponent]
})
export class AppModule { }
