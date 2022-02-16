import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {

  heroes: string[] = ['Ironman','Spiderman','Hulk','Thor'];
  heroesBorrado: string = '';

  borrarHeroe():void{
    this.heroesBorrado =  this.heroes.pop() || '';
    
  }

}
