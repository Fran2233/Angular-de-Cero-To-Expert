import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';



@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [

  ]
})
export class BasicosComponent implements OnInit {


  // miFormulario: FormGroup = new FormGroup({
  //   nombre     : new FormControl(),
  //   precio     : new FormControl(),
  //   existencias: new FormControl(),
  // })

  // TODO:FORM-BUILDER
  miFormulario: FormGroup = this.formBuilder.group({
    nombre: [, [Validators.required, Validators.minLength(3)]], 
    precio: [, [Validators.min(0), Validators.required]],
    existencias: [, [Validators.min(0), Validators.required]]
  });


  constructor(private formBuilder: FormBuilder) {

  }


  ngOnInit(): void {
      this.miFormulario.reset({
        nombre: 'RTX 3090',
        precio: 1200,
        
      })
  }

  campoValido(campo:string) {
    return this.miFormulario.controls[campo].errors
     && this.miFormulario.controls[campo].touched

  }

  guardar(){

    if(this.miFormulario.invalid){
      this.miFormulario.markAllAsTouched();
      return;
    }

    console.log(this.miFormulario.value)
    this.miFormulario.reset();
  }






}
