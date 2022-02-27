import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { nombreApellidoPattern, emailPattern, noPuedeSerStrider } from '../../../shared/validator/validaciones';
import { ValidatorService } from '../../../shared/validator/validator.service';
import { EmailValidatorService } from '../../../shared/validator/email-validator.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styles: [
  ]
})
export class RegistroComponent implements OnInit {

  miFormulario: FormGroup = this.fb.group({
    nombre: ['', [Validators.required, Validators.pattern(this.validatorService.nombreApellidoPattern)]],
    email: ['', [Validators.required, Validators.pattern(this.validatorService.emailPattern)], [this.emailValidator]],
    username: ['', [Validators.required, this.validatorService.noPuedeSerStrider]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    password2: ['', [Validators.required]],
  },
    {
      validators: [
        this.validatorService.camposIguales('password', 'password2')

      ]

    }

  )




  get emailError():string{

    const errors = this.miFormulario.get('email')?.errors;
    if(errors?.['required']){
      return 'Email obligatorio';
    }else if(errors?.['pattern']){
      return 'Formato invalido!!!!';
    }else if(errors?.['emailTomado']){
      return 'Ya existe ese correo!!!';
    }

    return '';
  }

  constructor(private fb: FormBuilder,
    private validatorService: ValidatorService,
    private emailValidator: EmailValidatorService) { }

  ngOnInit(): void {
    this.miFormulario.reset({
      nombre: 'Fran larrosa',
      email: 'test1@test.com',
      username: 'fran2233',
      password: '123456',
      password2: '123456'
    })
  }


  campoNoValido(campo: string) {
    return this.miFormulario.get(campo)?.invalid
      && this.miFormulario.get(campo)?.touched;
  }




  submitForm() {
    this.miFormulario.markAllAsTouched();
  }
}
