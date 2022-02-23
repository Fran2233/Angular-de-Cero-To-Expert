import { Component, OnInit } from '@angular/core';
import { Heroe, Publisher } from '../../interfaces/heroes.interface';
import { HeroesService } from '../../services/heroes.service';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmarComponent } from '../../components/confirmar/confirmar.component';
@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styles: [
    `
    img{
      width:100%;
      border-radius: 5x;
    }
    
    `
  ]

})
export class AgregarComponent implements OnInit {

  heroe: Heroe = {
    superhero: '',
    alter_ego: '',
    first_appearance: '',
    publisher: Publisher.DCComics,
    alt_img: '',
    characters: ''
  }

  publisher = [
    {
      id: 'DC Comics',
      desc: 'DC - Comics'
    },
    {
      id: 'Marvel Comics',
      desc: 'Marvel - Comics'

    }
  ]

  seBorro:boolean = false;

  constructor(private heroeService: HeroesService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private snackBar: MatSnackBar,
    private matDialog: MatDialog) { }

  ngOnInit(): void {

    if (!this.router.url.includes('editar')) {
      return;
    }

    this.activatedRoute.params
      .pipe(
        switchMap(({ id }) => this.heroeService.getHeroe(id))
      )
      .subscribe(heroe => this.heroe = heroe);
  }

  guardar() {

    if (this.heroe.superhero.trim().length === 0) {
      return;
    }
    if (this.heroe.id) {
      this.heroeService.editarHeroe(this.heroe)
        .subscribe(heroe => this.mostrarSnackbar('registro actualizado'));
    } else {
      this.heroeService.agregarHeroe(this.heroe)
        .subscribe(heroe => {
          this.router.navigate(['/heroes/editar', heroe.id]);
          this.mostrarSnackbar('registro creado');
        });
    }
  }

  borrarHeroe() {
    
    const dialog = this.matDialog.open(ConfirmarComponent,{
      width: '250px',
      data: this.heroe
    });

    dialog.afterClosed()
    .pipe(
      switchMap(res => (res) ? this.heroeService.borrarHeroe(this.heroe.id!) : this.router.navigate([`heroes/editar/${this.heroe.id}`]))
    )
    .subscribe(res => {
      if(res){
        this.router.navigate(['/heroes'])
      }
    })
    //   if  (res){
    //     this.heroeService.borrarHeroe(this.heroe.id!)
    //   .subscribe(resp => {
    //     this.router.navigate(['/heroes']);
    //   })
    //   }
    // })
    // dialog.afterClosed()
    // .subscribe((res) =>{
    //   if  (res){
    //     this.heroeService.borrarHeroe(this.heroe.id!)
    //   .subscribe(resp => {
    //     this.router.navigate(['/heroes']);
    //   })
    //   }
    // })

    
  }

  mostrarSnackbar(mensaje: string) {

    this.snackBar.open(mensaje, 'ok!', {
      duration: 2500
    })
  }



}
