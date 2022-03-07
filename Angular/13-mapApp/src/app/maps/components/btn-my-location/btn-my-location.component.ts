import { Component, OnInit } from '@angular/core';
import { MapService } from '../../services/map.service';
import { PlacesService } from '../../services/places.service';

@Component({
  selector: 'app-btn-my-location',
  templateUrl: './btn-my-location.component.html',
  styles: [
    `
    button{
      position: fixed;
      top: 20px;
      right: 20px;
    }
    
    `
  ]
})
export class BtnMyLocationComponent implements OnInit {

  constructor(private ms:MapService,
    private placesService: PlacesService) { }

  ngOnInit(): void {
  }


  goToMyLocation(){

    if(!this.placesService.userLocation){
      throw Error('no hay ubicacion d user');
    }
    if(!this.ms.isMapReady){
      throw Error('no se inicio el map');
    }
    this.ms.flyTo(this.placesService.userLocation!)
  }

}
