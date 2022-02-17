import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private apiKey : string = 'wM80maUfgUtaXd8f1c3A5evHv44xLJXX';
  private _historial: string[] = [];

  get historial() {

    return [...this._historial];
    // ROMPO LA REFERENCIA CON LOS ... 
  }


  constructor(private http:HttpClient){

  }

  buscarGifs(query: string = '') {
    query = query.trim().toLowerCase();

    // SI NO LO INCLUYE LO INSERTO OSEA SI NO EXISTE
    if (!this._historial.includes(query)) {
      this._historial.unshift(query);
      this._historial = this._historial.splice(0, 10);
    }

    this.http.get('https://api.giphy.com/v1/gifs/search?api_key=wM80maUfgUtaXd8f1c3A5evHv44xLJXX&q=dragon ball z&limit=10').subscribe((response :any) =>{
      console.log(response.data);
    })

    
  }
}
