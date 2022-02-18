import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { SearchGifsResponse, Gif } from '../interfaces/gifs.interface';
import { ThisReceiver } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private apiKey      : string = 'wM80maUfgUtaXd8f1c3A5evHv44xLJXX';
  private servicioUrl : string = 'https://api.giphy.com/v1/gifs';
  private _historial  : string[] = [];

  public resultados: Gif[] = [];


  get historial() {

    return [...this._historial];
    // ROMPO LA REFERENCIA CON LOS ... 
  }


  constructor(private http: HttpClient) {
    // una manera de hacerlo
    this.resultados = JSON.parse(localStorage.getItem('ultimoResult')!) || [];

    // otra manera
    localStorage.getItem('historial');
    if (localStorage.getItem('historial')) {
      this._historial = JSON.parse(localStorage.getItem('historial')!);
      // this.resultados = JSON.parse(localStorage.getItem('ultimoResult')!);
    }

  }

  buscarGifs(query: string = '') {
    query = query.trim().toLowerCase();

    // SI NO LO INCLUYE LO INSERTO OSEA SI NO EXISTE
    if (!this._historial.includes(query)) {
      this._historial.unshift(query);
      this._historial = this._historial.splice(0, 10);
      localStorage.setItem('historial', JSON.stringify(this._historial));
    }

    const params = new HttpParams()
    .set('api_key', this.apiKey)
    .set('limit', '10')
    .set('q', query);



    this.http.get<SearchGifsResponse>(`${this.servicioUrl}/search`,{params})
      .subscribe((response) => {
        console.log(response.data);
        this.resultados = response.data;
        // CUANDO YA TENGO EL RESULTADO LO GUARDO
        localStorage.setItem('ultimoResult', JSON.stringify(this.resultados));
      })


  }
}
