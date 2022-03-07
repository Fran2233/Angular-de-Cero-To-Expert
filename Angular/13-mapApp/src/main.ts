import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

import  mapboxgl from 'mapbox-gl'; // or "const mapboxgl = require('mapbox-gl');"
 
mapboxgl.accessToken = 'pk.eyJ1IjoiZnJhbjIyMzMiLCJhIjoiY2wwNzFtank2MDdyNDNqcGR5YmVobHZwYSJ9.Bm3eoLH-yjrv0V4ohxBfGQ';

if(!navigator.geolocation){
  alert('nav no soporta la geolocation');
  throw new Error('nav no soporta geolocation');
}

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
