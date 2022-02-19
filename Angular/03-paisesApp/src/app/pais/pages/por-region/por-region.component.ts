import { Component, } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country, } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  
})
export class PorRegionComponent  {

  termino: string = '';
  hayError: boolean = false;
  paises: Country[] = [];

  constructor(private paisService: PaisService) { }


  buscar(termino :string) {
    this.hayError = false;
    this.termino = termino;
                                            //TODO  PARA QUE SE DISPARE  
    this.paisService.buscarRegion(this.termino).subscribe({
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
    //TODO asdasd
  }

}
