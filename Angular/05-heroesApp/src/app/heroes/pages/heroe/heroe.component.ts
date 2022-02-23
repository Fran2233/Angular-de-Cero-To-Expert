import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Heroe } from '../../interfaces/heroes.interface';
import {switchMap} from 'rxjs/operators';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles:[
    
    
    `

    img{
      width: 100%;
      border-radius: 5px;
    }

    `
  ]
  
})
export class HeroeComponent implements OnInit {

  heroe!:Heroe;

  // Para leerel URL
  constructor(private activatedRoute: ActivatedRoute,
              private heroesService: HeroesService) { }

  ngOnInit(): void {
    this.activatedRoute.params
    .pipe(
      switchMap(({id}) => this.heroesService.getHeroe(id)) //RECIBE LO QUE ESTA EMITIENDO
    )
    .subscribe(heroe => this.heroe = heroe)
  }


  // regresar(){
  //   this.router.navigate(['/heroes/listado']);
  // }
}
