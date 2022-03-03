import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styles: [
  ]
})
export class AgregarComponent implements OnInit {
color: string = 'green';
text:string = 'asd';
  miFormulario: FormGroup = this.fb.group({
    nombre:['',Validators.required]
  })
  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
  }


  haveError(campo:string):boolean{
    return this.miFormulario.get(campo)?.invalid || false;
  }

  changeName(){
    this.text = Math.random().toString();
  }

  changeColor(){
    const color = "#xxxxxx".replace(/x/g, y=>(Math.random()*16|0).toString(16));
    this.color = color;
  }
}
