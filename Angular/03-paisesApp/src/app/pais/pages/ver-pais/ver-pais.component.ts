import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs/operators';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',

})
export class VerPaisComponent implements OnInit {

  pais!: Country;

  constructor(private activateRoute: ActivatedRoute,

    private paisService: PaisService

  ) { }

  ngOnInit(): void {
    this.activateRoute.params
      .pipe(
        //TODO PERMITE RECIBIBIR UN OBSERVABLE Y REGRESAR UNO
        switchMap(({ id }) => this.paisService.getPaisPorId(id)),
        tap(console.log) //TODO imprime en consola lo que responda
      )
      .subscribe(pais => this.pais=pais[0]);
    // this.activateRoute.params
    //   .subscribe(({ id }) => {  //TODO esto es igual a poner (params.id)
    //     console.log(id);
    //     this.paisService.getPaisPorId(id).subscribe(pais => {
    //       console.log(pais);
    //     });
    //   });

  }
}
