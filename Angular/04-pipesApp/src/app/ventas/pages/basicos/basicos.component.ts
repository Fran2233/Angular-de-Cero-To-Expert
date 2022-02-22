import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent  {

  nombreLower:string = 'Francisco';
  nombreUpper:string = 'FRANCISCO';
  nombreCompleto:string = 'FRaNcisCo LArrOsA';

  fecha:Date = new Date(); /* fecha actual */


}
