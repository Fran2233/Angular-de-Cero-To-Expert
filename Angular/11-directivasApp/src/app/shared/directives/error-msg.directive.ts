import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[errorMsg]'
})
export class ErrorMsgDirective implements OnInit{

  htmlElement : ElementRef<HTMLElement>;

  private _mensaje:string = 'Campo obligatorio';
  private _color:string = 'red';

// Se ejecuta solo si hay cambios

  @Input()set color(valor:string){
    this._color = valor;
    this.setColor();
  }
  // @Input() mensaje:string = 'Campo obligatorio';

  @Input()set mensaje (valor:string){
    this._mensaje = valor;
    this.setMensaje();
  }


  @Input()set valido (valor:boolean){
    
    (valor) ? this.htmlElement.nativeElement.classList.add('hidden')
    : this.htmlElement.nativeElement.classList.remove('hidden')


  }





  constructor(private element: ElementRef<HTMLElement>) { 

  this.htmlElement =  element;
  
  }
  ngOnInit(): void {
    this.setColor();
    this.setMensaje();
    this.setClass();


  }

  setClass(){
    this.htmlElement.nativeElement.classList.add('form-text');
  }

  setColor(){
    this.htmlElement.nativeElement.style.color = this._color;
    
  }

  setMensaje(){
    this.htmlElement.nativeElement.innerText = this._mensaje;
  }

}
