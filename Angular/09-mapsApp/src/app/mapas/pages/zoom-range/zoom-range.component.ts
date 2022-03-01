import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import * as  mapboxgl from 'mapbox-gl'
@Component({
  selector: 'app-zoom-range',
  templateUrl: './zoom-range.component.html',
  styles: [

    `
    .mapa-container{
      width:100%;
      height: 100%;
    } 

    .row{
      background-color: white;
      border-radius: 5px;
      position: fixed;
      bottom: 50px;
      left:50px;
      padding: 10px;
      width:400px;
      z-index: 999;
    }
    
    `
  ]
})
export class ZoomRangeComponent implements AfterViewInit, OnDestroy {

  @ViewChild('mapa')divMapa!:ElementRef;
  mapa!: mapboxgl.Map;
  zoomLevel:number = 10;
  center: [number,number] = [-59.13707170351181, -37.328712948148166];
  constructor() { }

  ngOnDestroy(): void {
    this.mapa.off('zoom',() =>{});
    this.mapa.off('zoomend',() =>{});
    this.mapa.off('move',() =>{});
  }

  ngAfterViewInit(): void {

    this.mapa = new mapboxgl.Map({
      container: this.divMapa.nativeElement,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: this.center,
      zoom: this.zoomLevel
    });

    // CUANDO ALLA UN COMPONENTE TIPO ON QUE ESCUCHA TODO EL TIEMPO HAY QUE 
    //DESTRUIRLO JUNTO CON EL COMPONENTE

    this.mapa.on('zoom', (res) =>{
      const zoomActual = this.mapa.getZoom();
      this.zoomLevel = zoomActual;
    });

    this.mapa.on('zoomend', (res) =>{
      if(this.mapa.getZoom() > 18){
        this.mapa.zoomTo(18)
      }
    });



    // movimiento longitud latitud
    this.mapa.on('move', (event) =>{
      const target  = event.target;
      const {lng, lat} = target.getCenter();
      this.center = [lng,lat];
    })
  
  }

  zoomOut(){
    this.mapa.zoomOut();
  }

  zoomIn(){
    this.mapa.zoomIn();
  }

  zoomCambio(valor :string){
    this.mapa.zoomTo(Number(valor));
  }
}
