import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country, Name } from '../../interfaces/pais.interface';
@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styles: [
    `
      li{
        cursor: pointer;
      }
      
      `
  ]

})
export class PorCapitalComponent {

  termino: string = '';
  hayError: boolean = false;
  paises: Country[] = [];
  mostrarSugerencias: boolean = false;
  paisesSujeridos: Country[] = [];
  constructor(private paisService: PaisService) { }


  buscar(termino: string) {
    this.hayError = false;
    this.termino = termino;
    this.mostrarSugerencias = false;                      /* PARA QUE SE DISPARE  */
    this.paisService.buscarCapital(this.termino).subscribe({
      next: (paises) => {
        this.paises = paises;
        console.log(paises);
      },
      error: (err) => {
        console.info(err);
        this.hayError = true;
        this.paises = [];
      },
    });
  }

  sugerencias(termino: string) {
    this.hayError = false;
    this.termino = termino;
    this.mostrarSugerencias = true;
    this.paisService.buscarCapital(termino)   /* solo muestro 3 con splice */
      .subscribe({
        next: (paises) => {
          this.paisesSujeridos = paises.splice(0, 5);
        },
        error: (err) => {
          this.paisesSujeridos = [];
        },

      });

  }


  buscarSugerido(termino: string) {
    this.buscar(termino);
  }


}
