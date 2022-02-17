import { Component } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';




@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
})



export class MainPageComponent {


  personajes: Personaje[] = [
    {
      nombre: 'Goku',
      poder: 20000
    },
    {
      nombre: 'Vegeta',
      poder: 1500
    }

  ];

  nuevo: Personaje = {
    nombre: 'ROSHI',
    poder: 1000

  }


  agregarNuevoPersonaje(event : Personaje){
    this.personajes.push(event);
  }

 



}
