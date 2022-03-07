import { Injectable } from '@angular/core';
import { AnySourceData, LngLatBounds, LngLatLike, Map, Marker, Popup } from 'mapbox-gl';
import { Feature } from '../interfaces/places';
import { DirectionsApiClient } from '../api/directionsApiClient';
import { Directions, Route } from '../interfaces/directions';
@Injectable({
  providedIn: 'root'
})
export class MapService {

  private _map?: Map;
  private markers: Marker[] = [];

  get isMapReady() {
    return !!this._map;
    // Si tiene valor true sino false
  }

  constructor(private directionsApi: DirectionsApiClient) { }


  setMap(map: Map) {
    this._map = map;
  }

  flyTo(coords: LngLatLike) {
    if (!this.isMapReady) throw Error('mapa no inicializado');

    this._map?.flyTo({
      zoom: 14,
      center: coords
    })
  }


  createMarkers(places: Feature[], userLocation: [number, number]) {

    if (!this._map) throw Error('mapa no iniciado');


    this.markers.forEach(marker => marker.remove());

    const newMarkers = [];
    for (const place of places) {
      const [lng, lat] = place.center;
      const popup = new Popup()
        .setHTML(
          `
            <h6>${place.text}</h6>
            <span>${place.place_name}</span>
          `
        );
      const newMarker = new Marker()
        .setLngLat([lng, lat])
        .setPopup(popup)
        .addTo(this._map)

      newMarkers.push(newMarker);
    }
    this.markers = newMarkers;
    if (places.length === 0) return;
    // limites del mapa
    const bounds = new LngLatBounds();

    newMarkers.forEach(marker => bounds.extend(marker.getLngLat()));
    bounds.extend(userLocation);
    this._map.fitBounds(bounds, {
      padding: 150
    })

  }


  getRouteBetweenPoints(star: [number, number], end: [number, number]) {

    this.directionsApi.get<Directions>(`/${star.join(',')};${end.join(',')}`)
      .subscribe(res => this.drawPolyline(res.routes[0]));
  }


  private drawPolyline(route: Route) {

    console.log({ kms: route.distance / 1000, duration: route.duration / 60 });
    const coord = route.geometry.coordinates;


    const bounds = new LngLatBounds();

    coord.forEach(([lng, lat]) => bounds.extend([lng, lat]));


    this._map?.fitBounds(bounds, {
      padding: 200
    });


    // PolyLine
    const sourceData: AnySourceData = {
      type: 'geojson',
      data: {
        type: 'FeatureCollection',
        features: [
          {
            type: 'Feature',
            properties: {},
            geometry: {
              type: 'LineString',
              coordinates: coord
            }
          }
        ]
      }
    }

    if(this._map?.getLayer('RouteString')){
      this._map.removeLayer('RouteString');
      this._map.removeSource('RouteString');
    }

this._map?.addSource('RouteString', sourceData);
this._map?.addLayer({
  id: 'RouteString',
  type: 'line',
  source: 'RouteString',
  layout: {
    "line-cap": "round",
    "line-join": "round"
  },
  paint:{
    "line-color": 'black',
    "line-width": 3
  }
});
  }

}