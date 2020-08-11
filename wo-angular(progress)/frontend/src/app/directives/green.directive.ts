import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[Wo-Green]'
})
export class GreenDirective {

  constructor(private el: ElementRef) { 
    el.nativeElement.style.color = '#83d41d'
   }

}
