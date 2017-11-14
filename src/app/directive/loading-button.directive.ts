import {
  AfterViewInit, Directive, ElementRef, HostBinding, HostListener, Input, OnInit,
  ViewContainerRef
} from '@angular/core';

@Directive({
  selector: '[loadingButton]'
})
export class LoadingButtonDirective implements OnInit {

  placeHolder;
  @Input('loadingButton') set show(value: boolean) {
    if (value === false) {
      this.setInitValue();
    }
  }

  @HostBinding('disabled') disabled;

  constructor(private targetElement: ElementRef) { }

  @HostListener('click')
  onCLick() {
    this.targetElement.nativeElement.innerHTML = 'Loading...';
    this.disabled = true;
  }

  ngOnInit(): void {
    this.placeHolder = this.targetElement.nativeElement.innerHTML;
  }

  setInitValue() {
    if (this.placeHolder) {
      this.targetElement.nativeElement.innerHTML = this.placeHolder;
    }

    this.disabled = false;
  }

}
