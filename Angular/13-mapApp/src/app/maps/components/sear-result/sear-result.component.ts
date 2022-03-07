import { Component, OnInit } from '@angular/core';
import { PlacesService } from '../../services/places.service';
import { Feature } from '../../interfaces/places';
import { MapService } from '../../services/map.service';

@Component({
  selector: 'app-sear-result',
  templateUrl: './sear-result.component.html',
  styleUrls: ['./sear-result.component.css']
})
export class SearResultComponent implements OnInit {


  public selected!: string;

  constructor(private plcesService: PlacesService,
    private mapService: MapService) { }

  ngOnInit(): void {


  }

  get isLoadingPLaces() {
    return this.plcesService.isLoadingPlaces;
  }


  get places() {
    return this.plcesService.places;
  }

  flyTo(place: Feature) {
    this.selected = place.id;
    const [lng, lat] = place.center;
    this.mapService.flyTo([lng, lat])
  }

  getDirections(place: Feature) {
    const star = this.plcesService.userLocation!;
    const end = place.center as [number, number]
    this.mapService.getRouteBetweenPoints(star, end)
  }
}
