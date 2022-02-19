import { Component, } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country, } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [
    `
    button{
      margin-right: 1.5px;
    }
    `
  ]
})
export class PorRegionComponent {

  // termino: string = '';
  hayError: boolean = false;
  paises: Country[] = [];
  
  regiones: string[] = [
    'africa', 'americas', 'asia', 'europe', 'oceania'
  ]
  regionActive: string = '';
  constructor(private paisService: PaisService) { }

  activarRegion(region: string) {
    if(region === this.regionActive){return};

    this.regionActive = region;

    this.paisService.buscarRegion(region).subscribe
    ( paises => this.paises = paises);
  }

  getClasesCSS(region: string): string {
    return (region === this.regionActive) ? 'btn btn-primary' : 'btn btn-outline-primary'
  }


  // buscar(region :string) {
  //   this.hayError = false;
  //   this.regionActive = region;
  //                                           //TODO  PARA QUE SE DISPARE  
  //   this.paisService.buscarRegion(this.regionActive).subscribe({
  //     next: (paises) => {
  //       this.paises = paises;
  //       console.log(paises);
  //     },
  //     error: (err) => {
  //       console.info(err);
  //       this.hayError = true;
  //       this.paises = [];
  //     },
  //   });
  }

  // sugerencias(termino :string){
  //   this.hayError = false;
  //   //TODO asdasd
  // }


