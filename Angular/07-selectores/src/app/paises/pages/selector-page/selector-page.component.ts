import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PaisesServiceService } from '../../services/paises-service.service';
import { PaisSmall, Pais } from '../../interfaces/paises.interface';
import { switchMap,tap } from 'rxjs';

@Component({
  selector: 'app-selector-page',
  templateUrl: './selector-page.component.html',
  styles: [
  ]
})
export class SelectorPageComponent implements OnInit {

  miFormulario: FormGroup = this.fb.group({

    region  : ['',Validators.required],
    pais    : ['',Validators.required],
    frontera: ['',Validators.required]


  })

// selectores
  regiones:string[]=[];
  paises: PaisSmall[] = [];
  // fronteras: string[] = [];
  fronteras: PaisSmall[] = [];
  cargando:boolean = false;

  constructor(private fb : FormBuilder,
              private paisesService: PaisesServiceService) { }

  ngOnInit(): void {
    this.regiones =  this.paisesService.regiones;
    // // Cuando cambie la regio
    // this.miFormulario.get('region')?.valueChanges
    // .subscribe(region => {

    //   this.paisesService.getPaisesporRegion(region)
    //   .subscribe(paises =>{
    //     this.paises = paises;
    //   })
    // })

    this.miFormulario.get('region')?.valueChanges
    .pipe(
      tap( _ => {
        this.miFormulario.get('pais')?.reset('');
        this.cargando = true;
      }),
      switchMap(region => this.paisesService.getPaisesporRegion(region))
    )
    .subscribe(paises =>{
      this.paises = paises;
      this.cargando = false;
    });




    this.miFormulario.get('pais')?.valueChanges
    .pipe(
      tap(_ =>{
        this.fronteras = [];
        this.miFormulario.get('fronteras')?.reset('');
        this.cargando = true;
      }),
      switchMap(cod => this.paisesService.getPaisPorCodigo(cod)),
      switchMap(pais => this.paisesService.getPaisesPorCodigo(pais![0]?.borders))
    ).subscribe(paises => {
      // this.fronteras = pais![0]?.borders || [] ;
      this.fronteras = paises;
      this.cargando = false;
      console.log(paises)
    })


  }


  guardar(){
    this.miFormulario.value;
  }

}
