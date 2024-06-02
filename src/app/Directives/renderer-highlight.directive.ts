import { Directive, ElementRef, HostListener, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appRendererHighlight]'
})
export class RendererHighlightDirective implements OnInit{

  constructor(private element: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
  }

  @HostListener('mouseenter') onmouseover(event:Event){
    this.renderer.setStyle(this.element.nativeElement, 'background-color', 'red');

  }
  
  @HostListener('mouseleave') onmouseleave(event:Event){
    this.renderer.setStyle(this.element.nativeElement, 'background-color', 'yellow');

  }
  
  @HostListener('click') onmouseclick(event:Event){
    this.renderer.setStyle(this.element.nativeElement, 'background-color', 'green');

  }
}
