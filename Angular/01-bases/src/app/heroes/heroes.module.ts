import { CommonModule } from '@angular/common';
import {NgModule} from '@angular/core';
import { HeroeComponent } from './heroe/heroe.component';
import { ListadoComponent } from './listado/listado.component';




@NgModule({
    // DICE QUE COSAS CONTIENE EL MODULO , QUE COMPONENTES,ETC
    declarations:[
        HeroeComponent,
        ListadoComponent
    ],

    // COSAS QUE QUIERO QUE SEAN VISIBLES AFUERA DEL MODULO
    exports:[
        ListadoComponent
    ],
    // ACA VAN MODULOS
    imports:[
        CommonModule,
    ]
})






export class HeroesModule {

}