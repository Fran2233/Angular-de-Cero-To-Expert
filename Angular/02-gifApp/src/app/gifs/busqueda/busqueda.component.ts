import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styles: [
  ]
})
export class BusquedaComponent {

  // OPERADOR PARA ASEGURARSE DEL OBJ NO ES NULO CUANDO NO ESTA 
  // INICIALIZADO USO !
  @ViewChild('txtBuscar') txtBuscar!: ElementRef<HTMLInputElement>;
  constructor(private gifsService: GifsService) { }
  
  
  buscar() {
    const valor = this.txtBuscar.nativeElement.value;

    if (valor.trim().length === 0){
      return ;
    }

    this.gifsService.buscarGifs(valor);

    this.txtBuscar.nativeElement.value = '';
  }


}
