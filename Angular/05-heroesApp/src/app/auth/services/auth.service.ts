import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Auth } from '../interfaces/auth.interface';
import {  Observable,of} from 'rxjs';
import { tap,map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  private _auth:Auth | undefined;
  private baseUrl:string = environment.baseUrl;

  get auth(): Auth{
    return {...this._auth!}
  }
  constructor(private http:HttpClient) { } /* PARA HACER PETICION HTTP
  DEBO IMPORTAR EL MODULO */

  veficaAutenticacion():Observable<boolean>{
    if(!localStorage.getItem('id')){
      return of(false);
    }

    return this.http.get<Auth>(`${this.baseUrl}/usuarios/1`)
                .pipe(
                  map( auth => {
                    this._auth = auth;
                    return true;
                  })
                );
              


    /* Devuelve un observable el OF */

  }

  login(){
    return this.http.get<Auth>(`${this.baseUrl}/usuarios/1`)
    .pipe(
      tap(res => this._auth = res),
      tap(res => localStorage.setItem('id',res.id)),
      /* antes que se haga la peticion pasa primero por tap */
    );

  }

  logout(){
    this._auth = undefined;
  }

}
