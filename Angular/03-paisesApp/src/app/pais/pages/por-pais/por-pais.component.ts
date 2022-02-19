import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country, Name } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [

    `
    li{
      cursor: pointer;
    }

    `
  ]
})
export class PorPaisComponent {

  termino: string = '';
  hayError: boolean = false;
  paises: Country[] = [];
  paisesSujeridos: Country[] = [];
  mostrarSugerencias :boolean = false;
  constructor(private paisService: PaisService) { }


  buscar(termino: string) {
    this.mostrarSugerencias = false;
    this.hayError = false;
    this.termino = termino;
    /* PARA QUE SE DISPARE  */
    this.paisService.buscarPais(this.termino).subscribe({
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
    this.paisService.buscarPais(termino)   /* solo muestro 3 con splice */
      .subscribe({
        next: (paises) => {
          this.paisesSujeridos = paises.splice(0, 5);
        },
        error: (err) => {
          this.paisesSujeridos = [];
        },

      });

  }


  buscarSugerido(termino:string){
    this.buscar(termino);
  }

}



