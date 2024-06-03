import { Directive, Input, OnChanges, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appAlternateIf]'
})
export class AlternateIfDirective implements OnChanges{

  @Input() set appAlternateIf(condition: boolean){
    if(condition){
      this.vdRef.createEmbeddedView(this.templateRef);
    }else {
      this.vdRef.clear();
    }
  }
  constructor(private templateRef: TemplateRef<any>, 
              private vdRef: ViewContainerRef
  ) { }

  ngOnChanges() {
   
  }

}
