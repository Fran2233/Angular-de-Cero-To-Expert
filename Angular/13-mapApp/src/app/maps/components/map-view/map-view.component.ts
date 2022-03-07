import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { PlacesService,MapService } from '../../services';
import * as mapboxgl from 'mapbox-gl';


@Component({
  selector: 'app-map-view',
  templateUrl: './map-view.component.html',
  styles: [
    `
      .map-container{
        position:fixed;
        top: 0px;
        right: 0px;
        width: 100vw;
        height: 100vh;
      }
    
    
    `
  ]
})
export class MapViewComponent implements AfterViewInit {



@ViewChild('mapDiv') mapDivElement!: ElementRef;



  constructor(private pS:PlacesService,
              private mapService: MapService) { }
// Espero a q el componente tenga sus elementos listos por eso uso
// After
  ngAfterViewInit(): void {

    if(!this.pS.userLocation){
      throw Error('no funciona el service')
    }


    const map = new mapboxgl.Map({
    container: this.mapDivElement.nativeElement, // container ID
    style: 'mapbox://styles/mapbox/streets-v11', // style URL
    center: this.pS.userLocation, // starting position [lng, lat]
    zoom: 14 // starting zoom
    });

    const popup = new mapboxgl.Popup()
    .setHTML(`

      <h6>Aqui estoy</h6>
      <span>estoy en este lugar</span>

    `);

    new mapboxgl.Marker({color:'red'})
    .setLngLat( this.pS.userLocation )
    .setPopup(popup)
    .addTo(map)


    this.mapService.setMap(map);

  }
}
