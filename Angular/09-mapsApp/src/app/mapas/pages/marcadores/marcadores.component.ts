import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';

interface MarkerColor{
  color:string,
  marker?: mapboxgl.Marker,
  centro?: [number,number]
}


@Component({
  selector: 'app-marcadores',
  templateUrl: './marcadores.component.html',
  styles: [

    `
     .mapa-container{
      width:100%;
      height: 100%;
    } 
    
    .list-group{
      position: fixed;
      top: 20px;
      right: 20px;
      z-index: 99;
    }

    li{
      cursor:pointer;
    }
    
    `
  ]
})
export class MarcadoresComponent implements AfterViewInit {

  @ViewChild('mapa') divMapa!: ElementRef;
  mapa!: mapboxgl.Map;
  zoomLevel: number = 15;
  center: [number, number] = [-59.13707170351181, -37.328712948148166];

  marcadores: MarkerColor[] =[];


  constructor() { }

  ngAfterViewInit(): void {

    this.mapa = new mapboxgl.Map({
      container: this.divMapa.nativeElement,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: this.center,
      zoom: this.zoomLevel
    });

    this.readLocalStorage();


    // const markerHtml: HTMLElement = document.createElement('div');
    // markerHtml.innerHTML = 'sadas';

    // const marker = new mapboxgl.Marker({
    //   // element:markerHtml
    // }).setLngLat(this.center)
    // .addTo(this.mapa);

  }

  irMarcador(marker: mapboxgl.Marker){
    this.mapa.flyTo({
      center: marker.getLngLat()
    })  

    
      
  }


  addMarcador(){
    const color = "#xxxxxx".replace(/x/g, y=>(Math.random()*16|0).toString(16));
    const newMarker = new mapboxgl.Marker({
      draggable:true,
      color
    })
    .setLngLat(this.center).addTo(this.mapa);
    this.marcadores.push({
      color,
      marker: newMarker
    });

    this.saveMarkerLocal()

    newMarker.on('dragend',() =>{
      this.saveMarkerLocal()
    })
  }


  saveMarkerLocal(){

    const lngLat: MarkerColor[] = [];

    this.marcadores.forEach(m =>{
      const color = m.color;
      const {lng,lat} = m.marker!.getLngLat();

      lngLat.push({
        color,
        centro: [lng,lat]
      });

    })

    localStorage.setItem('Marcadores',JSON.stringify(lngLat));
         //   PASO DE ARRAY A STRING


  }


  readLocalStorage(){

    if( !localStorage.getItem('Marcadores') ){
      return;
    }
    const lngLatArr : MarkerColor[] = JSON.parse(localStorage.getItem('Marcadores')!);

    lngLatArr.forEach(m =>{
      const newMarker = new mapboxgl.Marker({
        color: m.color,
        draggable:true
      })
      .setLngLat(m.centro!)
      .addTo(this.mapa)

      this.marcadores.push({
        marker: newMarker,
        color: m.color
      })

      newMarker.on('dragend',() =>{
        this.saveMarkerLocal()
      })
    });


  }



  borrarMarker(i:number){
    // lo borro primero del mapa
    this.marcadores[i].marker?.remove();
    this.marcadores.splice(i,1);
    this.saveMarkerLocal();
  }
}
