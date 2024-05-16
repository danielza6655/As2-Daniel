import { Directive, ElementRef, Renderer2, HostListener, Output, EventEmitter } from '@angular/core';

@Directive({
  selector: '[appLargeText]',
  standalone : true
})
export class LargeTextDirective {
  @Output() fontSizeChanged = new EventEmitter<boolean>();

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener('mouseenter') onMouseEnter() {
    this.setFontSize('2.5em');
    this.fontSizeChanged.emit(true);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.setFontSize('1.5em');
    this.fontSizeChanged.emit(false);
  }

  private setFontSize(size: string) {
    this.renderer.setStyle(this.el.nativeElement, 'font-size', size);
  }
}
