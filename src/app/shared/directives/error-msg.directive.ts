import {
  Directive,
  ElementRef,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';

@Directive({
  selector: '[error-msj]',
})
export class ErrorMsgDirective implements OnInit, OnChanges {
  private _color: string = '#c70000';
  private _msj: string = 'Este campo es requerido';

  htmlElement: ElementRef<HTMLElement>;

  @Input() set color(value: string) {
    this._color = value;
    this.setColor();
  }

  @Input() set msj(value: string) {
    this._msj = value;
    this.setMsj();
  }

  @Input() set valido(value: boolean) {
    if (value) {
      this.htmlElement.nativeElement.classList.add('hidden');
    } else {
      this.htmlElement.nativeElement.classList.remove('hidden');
    }
  }

  constructor(private el: ElementRef<HTMLElement>) {
    this.htmlElement = el;
  }
  ngOnChanges(changes: SimpleChanges): void {}

  ngOnInit(): void {
    // console.log('ngOnInit directiva');
    // this.setColor();
    // this.setMsj();
    this.setClass();
    this.setColor();
    this.setMsj();
  }

  setClass(): void {
    this.htmlElement.nativeElement.classList.add('form-text');
  }

  setColor(): void {
    this.htmlElement.nativeElement.style.color = this._color;
  }

  setMsj(): void {
    this.htmlElement.nativeElement.innerHTML = this._msj;
  }
}
