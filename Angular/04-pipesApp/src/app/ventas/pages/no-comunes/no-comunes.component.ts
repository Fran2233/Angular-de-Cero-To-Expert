import { Component } from '@angular/core';
import { interval } from 'rxjs';


@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
    `
    
    `
  ]
})
export class NoComunesComponent {


  nomber:string = 'Francisco';
  genero:string = 'masculino';

  invitacionMap ={
    'masculino':'invitarlo',
    'femenino': 'invitarla'
  }

  // i18nplural
  clientes:string [] = ['Maria', 'fran','pedro','juan'];
  clientesMap = {
    '=0': 'no tenemos ningún cliente esperando' ,
    '=1': ' tenemos un cliente esperando',
    'other': 'tenemos # clientes esperando'
  }


  cambiarCliente(){
    this.nomber = 'Claudia';
    this.genero = 'femenino';
  }

  borrarCliente(){
 this.clientes.pop();
  }


  // Keyvalue Pipe
  persona = {
    nombre:'Francisco',
    edad: 26,
    city:'Tandil'
  }

  // json pipe

  heroes = [
    {
      nombre: 'Superman',
      vuela: true,

    },
    {
      nombre: 'Robin',
      vuela: false
    }
  ]

  // async pipe

  miObservable = interval(1000); //0,1,2,3
  valorPromesa = new Promise((resolve, reject)=>{
    // 
    setTimeout(() => {
      resolve('Tenemos data de promesa');
    }, 3500);
  });
 }
