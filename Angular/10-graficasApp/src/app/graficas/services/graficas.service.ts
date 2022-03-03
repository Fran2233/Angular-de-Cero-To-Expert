import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { map } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class GraficasService {

  constructor(private http:HttpClient) { }
  

  getData(){
    return this.http.get('http://localhost:3000/grafica');
  }


  getData2(){
    return this.getData()
    .pipe(
      map(data =>{
       const labels= Object.keys(data);
        const values = Object.values(data);
        return {labels, values} ;
      })
    )
  }



}
