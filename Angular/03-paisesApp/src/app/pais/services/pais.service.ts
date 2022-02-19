import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';
import { Country } from '../interfaces/pais.interface';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PaisService {


  private apiUrl: string = 'https://restcountries.com/v3.1';

  get httpParams(){
    return  new HttpParams()  /* ME PERMITE CONFIGURAR PARAMETROS DEL URL*/
    .set('fields', 'name,capital,cca2,flags,population');
  }
 
  constructor(private http: HttpClient) { }

  buscarPais(termino: string): Observable<Country[]> {
    const url = `${this.apiUrl}/name/${termino}`;
    return this.http.get<Country[]>(url,{params: this.httpParams});
    // .pipe
    // LOS OPERADORES como pipe SON FUNCIONES QUE SE EJECUTAN EN BASE AL PRODUCTO
    // DE LA PETICION HTTP (GET)
    // (
    // Tiene que regresar un Observable
    // El of es una funcion que genera Observables
    // transforma lo que sea que este dentro de los ()
    //  en un nuevo Observable
    // En este caso atrapa el error y devuelve un Array vacio
    //   catchError(err => of([]))
    // );
  }


  buscarCapital(termino: string): Observable<Country[]> {
    const url = `${this.apiUrl}/capital/${termino}`;
    return this.http.get<Country[]>(url,{params: this.httpParams});
  }

  buscarRegion(region: string): Observable<Country[]> {
    
    const url = `${this.apiUrl}/region/${region}?`;
    return this.http.get<Country[]>(url,{params: this.httpParams}).pipe( /* como se llaman igual lo dejo una vez */
      tap(console.log)
    )
  }

  // buscarRegion(termino :string):Observable <Country[]>{
  //   const url = `${this.apiUrl}/region/${termino}`;
  //   return this.http.get<Country[]>(url);
  // }


  getPaisPorId(id: string): Observable<Country> {
    const url = `${this.apiUrl}/alpha/${id}`;
    return this.http.get<Country>(url);
  }


}
