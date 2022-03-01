import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { PaisSmall, Pais } from '../interfaces/paises.interface';
import { combineLatest, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaisesServiceService {

  // /region/americas?fields=cca3,name

  private _baseUrl: string = 'https://restcountries.com/v3.1';


  private _regiones: string[] = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];


  get regiones() {
    return [...this._regiones]
  }
  constructor(private http: HttpClient) { }



  getPaisesporRegion(region: string): Observable<PaisSmall[]> {
    const url: string = `${this._baseUrl}/region/${region}?fields=cca3,name`
    return this.http.get<PaisSmall[]>(url);
  }


  getPaisPorCodigo(cod: string): Observable<Pais[] | null> {

    if (!cod) {
      return of([])
    }
    const url = ` ${this._baseUrl}/alpha?codes=${cod}`;
    return this.http.get<Pais[]>(url);
  }


  getPaisPorCodigoSmall(cod: string): Observable<PaisSmall> {

    const url = ` ${this._baseUrl}/alpha?codes=${cod}`;
    return this.http.get<Pais>(url);


  }


  getPaisesPorCodigo(borders: string[]):Observable<PaisSmall[]> {

    if (!borders) {
      return of([])
    }

    const peticiones: Observable<PaisSmall>[] = [];

    borders.forEach(codigo =>{
      const peticion = this.getPaisPorCodigoSmall(codigo);
      peticiones.push(peticion);
    });

    return combineLatest( peticiones );

  }


}
