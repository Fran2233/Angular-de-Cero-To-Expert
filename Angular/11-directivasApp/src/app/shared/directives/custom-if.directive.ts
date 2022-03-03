import { Directive, TemplateRef, ViewContainerRef, Input } from '@angular/core';

@Directive({
  selector: '[customIf]'
})
export class CustomIfDirective {

  @Input() set customIf(condicion:boolean){
    (condicion) ? this.viewContainer.createEmbeddedView(this.templateRef)
    : this.viewContainer.clear();
  }

  constructor(
    private templateRef:TemplateRef<HTMLHRElement>,
    private viewContainer: ViewContainerRef

  ) { }





}
