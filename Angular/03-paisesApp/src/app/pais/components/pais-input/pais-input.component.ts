
import { Component, Output, EventEmitter, OnInit, Input } from '@angular/core';
import { debounceTime, Subject } from 'rxjs';


@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',

})
export class PaisInputComponent implements OnInit{
  //TODO usualmente se le pone "on"
  @Output() onEnter: EventEmitter<string> = new EventEmitter();
  @Output() onDebounce: EventEmitter<string> = new EventEmitter();
  @Input() placeholder!: string;
  debouncer: Subject<string> = new Subject();

  termino: string = '';
  


  ngOnInit() {
      this.debouncer /* emite valor luego de q deja de escribir */
      .pipe(
        debounceTime(300)
      )
      .subscribe(valor =>{
        this.onDebounce.emit(valor);
      });
  }

  buscar() {
    //TODO emito el termino
    this.onEnter.emit(this.termino);
  }

  teclaPresionada(event : any){
    this.debouncer.next(this.termino);
  }
  constructor() { }



}
