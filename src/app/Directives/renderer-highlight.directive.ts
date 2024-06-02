import { Directive, ElementRef, HostBinding, HostListener, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appRendererHighlight]'
})
export class RendererHighlightDirective implements OnInit{

  @HostBinding('style.backgroundColor') color:string | undefined;
  constructor(private element: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
  }

  @HostListener('mouseenter') onmouseover(event:Event){
    this.color = 'red';
  }
  
  @HostListener('mouseleave') onmouseleave(event:Event){
    this.color = 'yellow';
  }
  
  @HostListener('click') onmouseclick(event:Event){
    this.color = 'pink';
  }
}
