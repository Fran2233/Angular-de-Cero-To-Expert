import { Component, OnDestroy, AfterViewChecked, OnInit, OnChanges, AfterViewInit, DoCheck, AfterContentChecked, AfterContentInit, SimpleChanges } from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-pagina1',
  templateUrl: './pagina1.component.html',
  styles: [
  ]
})
export class Pagina1Component implements
  OnInit,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy {
  constructor() {

    console.log('Constructor')
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChange');
  }
  ngDoCheck(): void {
    console.log('ngDoCheck');
  }
  ngAfterContentInit(): void {
    console.log('ngAfterContentInit');
  }
  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked');
  }
  ngAfterViewInit(): void {
    console.log('ngAfterViewInit');
  }
  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked');
  }
  ngOnDestroy(): void {
    console.log('ngOnDestroy');
    this.timerSubscription.unsubscribe();
    console.log('termino')
  }

  ngOnInit(): void {
    console.log('ngOninit')
    this.timerSubscription = interval(1).subscribe(i=>{
      this.seg = i;
    })
   
  }


  save(){

  }
  seg:number = 0;
  nombre: string = 'fra';
  timerSubscription!: Subscription;


}
