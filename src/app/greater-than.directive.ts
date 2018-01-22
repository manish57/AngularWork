import { Directive, HostListener, ElementRef, Input } from '@angular/core';
// Hostlistner allows us to subscribe to the events raised from DOM elements using our directive

@Directive({
  selector: '[appGreaterThan]',
})
export class GreaterThanDirective {

  @Input('Greater') greater;
  
  constructor(private el: ElementRef) { }

  @HostListener('blur') onBlur() {
    let value: number = this.el.nativeElement.value;

    if (this.greater == 0)
      this.el.nativeElement.value = '';
    else
      this.el.nativeElement.value = value;
  }

}
