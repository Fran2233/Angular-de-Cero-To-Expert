import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { of, tap, Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { AuthResponse, User } from '../interfaces/inteface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _baseUrl: string = environment.baseUrl;


  private _user!: User;


  get getUser() {
    return { ...this._user };
  }
  constructor(private http: HttpClient) { }




  registerUser(name: string, email: string, password: string) {
    const url = `${this._baseUrl}/auth/new`;
    const body = { name, email, password };
    return this.http.post<AuthResponse>(url, body)
      .pipe(
        tap(resp => {
          if (resp.ok) {
            localStorage.setItem('token', resp.token!);
          }
        }),
        map(resp => resp.ok),
        catchError(err => of(err.error.msg))
      );
  }

  login(email: string, password: string) {
    const url = `${this._baseUrl}/auth`;
    const body = { email, password };
    return this.http.post<AuthResponse>(url, body)
      .pipe(
        tap(resp => {
          if (resp.ok) {
            console.log(resp);
            localStorage.setItem('token', resp.token!);
          }
        }),
        map(resp => resp.ok),
        catchError(err => of(err.error.msg))
      );
  }



  validarToken(): Observable<boolean> {
    const url = `${this._baseUrl}/auth/renew`;
    const headers = new HttpHeaders()
      .set('x-token', localStorage.getItem('token') || '')
    return this.http.get<AuthResponse>(url, { headers })
      .pipe(
        map(resp => {
          localStorage.setItem('token', resp.token!);
          this._user = {
            name: resp.name!,
            uid: resp.uid!,
            email: resp.email!
          }
          return resp.ok
        }),
        catchError(err => of(false))
      );
  }

  logout() {
    localStorage.clear();
  }




}
