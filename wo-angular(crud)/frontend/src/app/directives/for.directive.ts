import { Directive, Input, ViewContainerRef, TemplateRef, OnInit } from '@angular/core';

@Directive({
  selector: '[Wo-For]',
})
export class ForDirective implements OnInit {

  @Input('Wo-ForEm') numbers: number[];

  constructor(
    private container: ViewContainerRef,
    private template: TemplateRef<any>
  ) {  }

  ngOnInit(): void {
    for (let number of this.numbers){
      this.container.createEmbeddedView(
        this.template, {$implicit: number});
    }
  }
}