import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import { ListadoComponent } from './pages/listado/listado.component';
import { AgregarComponent } from './pages/agregar/agregar.component';
import { BuscarComponent } from './pages/buscar/buscar.component';
import { HeroeComponent } from './pages/heroe/heroe.component';
import { HeroesHomeComponent } from './pages/heroes-home/heroes-home.component';

const routes: Routes = [
  {
    path: '',
    component: HeroesHomeComponent, //RUTA PADRE Y PARA MOSTRAR A LOS HIJOS USO ROUTER OUTLET
    children: [
      {
        path: 'listado',
        component: ListadoComponent,
      },
      {
        path: 'agregar',
        component: AgregarComponent,
      },
      {
        path: 'editar/:id',
        component: AgregarComponent,
      },
      {
        path: 'buscar',
        component: BuscarComponent,
      },
      {
        path: 'id',
        component: HeroeComponent,
      },
      {
        path: '**',
        redirectTo: 'listado'
      }

    ]
  }
]

@NgModule({
  exports:[
    RouterModule
  ],
  imports: [
    RouterModule.forChild(routes)
  ]
})
export class HeroesRoutingModule { }
