import {Directive, HostBinding, HostListener, OnInit} from '@angular/core';

@Directive({
  selector: '[hoverButton]'
})
export class HoverButtonDirective {

  @HostBinding('style.background-color') bkColor;
  @HostBinding('style.color') color;

  constructor() { }

  @HostListener('mouseover')
  onMouseOver() {
    this.bkColor = 'black';
    this.color = 'white';
  }

  @HostListener('mouseleave')
  onMouseOut() {
    delete this.bkColor;
    delete this.color;
  }

}
