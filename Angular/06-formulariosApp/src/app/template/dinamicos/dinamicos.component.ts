import { Component, OnInit } from '@angular/core';

interface Persona{
  nombre:string,
  favoritos: Favorito [],
}

interface Favorito{
  id:number,
  nombre:string
}

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styles: [
  ]
})
export class DinamicosComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  nuevoJuego: string ='';

  persona: Persona = {
    nombre: 'fran',
    favoritos:[
      {
        id:1,
        nombre: 'Sonic'
      },{
        id:2,
        nombre: 'Lol'
      }
    ]
  }

  agregarJuego(){
    const nuevoFavorito: Favorito ={
      id: this.persona.favoritos.length +1,
      nombre: this.nuevoJuego
    }
    this.persona.favoritos.push({...nuevoFavorito});
    this.nuevoJuego= '';
  }


  borrar(index:number){
    this.persona.favoritos.splice(index,1);
  }


  guardar(){
    
  }

}
