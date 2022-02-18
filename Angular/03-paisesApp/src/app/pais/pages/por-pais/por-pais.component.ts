import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country, Name } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',

})
export class PorPaisComponent {

  termino: string = '';
  hayError: boolean = false;
  paises: Country[] = [];

  constructor(private paisService: PaisService) { }


  buscar(termino :string) {
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

  sugerencias(termino :string){
    this.hayError = false;
    //TODO  sadasd
  }



}
