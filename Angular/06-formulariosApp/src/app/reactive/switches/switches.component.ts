import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-switches',
  templateUrl: './switches.component.html',
  styles: [
  ]
})
export class SwitchesComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

  miFormulario: FormGroup = this.fb.group({
    genero:[ 'M',Validators.required ],
    notificaciones:[ true,Validators.required ],
    condiciones: [false, Validators.requiredTrue]
  })

  persona = {
    genero: 'F',
    notificaciones: true
  }


  ngOnInit(): void {
      this.miFormulario.reset({
        ...this.persona,
        condiciones: false
      });

      //RXJS

      // this.miFormulario.get('condiciones')?.valueChanges.subscribe(newValue =>{
      //   console.log(newValue)
      // })
      
  

      this.miFormulario.valueChanges.subscribe( (form) => {
        const formSinReferencia = {...form};
        delete formSinReferencia.condiciones;
        this.persona = formSinReferencia;
      })
  }


  guardar(){
    const formValue =  {...this.miFormulario.value};

    delete formValue.condiciones;

    
    this.persona = formValue;

  }


}
