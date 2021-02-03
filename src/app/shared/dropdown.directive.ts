import {AfterViewInit, Directive, ElementRef, HostListener, Renderer2} from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective implements AfterViewInit {
  public isOpen = false;
  public menu: HTMLElement;

  constructor(private renderer: Renderer2, private element: ElementRef) { }

  ngAfterViewInit(): void {
    this.menu = this.element.nativeElement.querySelector('.dropdown-menu');
  }

  @HostListener('click') toggleOpen(): void {
    this.isOpen = !this.isOpen;
    if (this.isOpen) {
      this.renderer.addClass(this.menu, 'show');
    } else {
      this.renderer.removeClass(this.menu, 'show');
    }
  }
}
