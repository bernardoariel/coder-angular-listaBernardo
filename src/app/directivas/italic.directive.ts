import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appItalic]'
})
export class ItalicDirective {

  constructor(public elementRef:ElementRef, public renderer2: Renderer2) {

    console.log('aaa',elementRef)
    const elementoHtml = elementRef.nativeElement // es el node nativeElement

    renderer2.setStyle(elementoHtml, 'font-style', 'italic')

  }

}
