import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent implements OnInit {

  @ViewChild('miFormulario')miFormulario!: NgForm;
  constructor() { }

  initForm = {
    producto: '',
    precio: 10,
    existencia: 10

  }

  ngOnInit(): void {
  }

  nombreValido():boolean{
    return this.miFormulario?.controls['producto']?.invalid && this.miFormulario?.controls['producto']?.touched
  }


  precioValido():boolean{
    if(this.miFormulario?.controls['Precio']?.value < 0 && 
      this.miFormulario?.controls['Precio']?.touched ){
        return  true
    }
    return false;
     
  }
  guardar(){
    console.log(this.miFormulario)
    this.miFormulario.resetForm({
      Precio:0,
      Existencias:0
    });
  }

}
