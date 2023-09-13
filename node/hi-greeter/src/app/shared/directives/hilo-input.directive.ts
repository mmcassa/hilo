import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[hiloInput]'
})
export class HiloInputDirective {

  constructor(private el: ElementRef, 
              private renderer: Renderer2) { 
  
    renderer.setStyle(el.nativeElement,'background-color','#FFFFFF22');
    renderer.setStyle(el.nativeElement,'border','none');
    renderer.setStyle(el.nativeElement,'border-radius','4px');
    renderer.setStyle(el.nativeElement,'padding','4px 4px 4px 10px');
    renderer.setStyle(el.nativeElement,'color','white');
  }

}
