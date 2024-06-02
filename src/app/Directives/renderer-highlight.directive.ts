import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appRendererHighlight]'
})
export class RendererHighlightDirective implements OnInit{

  @Input() defaultColor: string = 'red';
  @Input() highlightColor: string = 'yellow';
  @HostBinding('style.backgroundColor') color:string | undefined;

  constructor(private element: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
  }

  @HostListener('mouseenter') onmouseover(event:Event){
    this.color = this.highlightColor;
  }
  
  @HostListener('mouseleave') onmouseleave(event:Event){
    this.color = this.defaultColor;
  }
  
  @HostListener('click') onmouseclick(event:Event){
    this.color = 'pink';
  }
}
