import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';
import { Country } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {


  private apiUrl: string = 'https://restcountries.com/v3.1';



  constructor(private http: HttpClient) { }

  buscarPais(termino: string): Observable <Country[]>{
    const url = `${this.apiUrl}/name/${termino}`;
    return this.http.get<Country[]>(url);
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


  buscarCapital(termino :string):Observable <Country[]>{
    const url = `${this.apiUrl}/capital/${termino}`;
    return this.http.get<Country[]>(url);
  }

  buscarRegion(termino :string):Observable <Country[]>{
    const url = `${this.apiUrl}/region/${termino}`;
    return this.http.get<Country[]>(url);
  }

  getPaisPorId(id :string):Observable <Country>{
    const url = `${this.apiUrl}/alpha/${id}`;
    return this.http.get<Country>(url);
  }
}
