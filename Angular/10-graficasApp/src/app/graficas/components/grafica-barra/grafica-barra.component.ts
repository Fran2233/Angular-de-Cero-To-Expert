import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { BaseChartDirective } from 'ng2-charts';
import { ChartData, ChartType, ChartEvent, ChartConfiguration } from 'chart.js';

@Component({
  selector: 'app-grafica-barra',
  templateUrl: './grafica-barra.component.html',
  styles: [
  ]
})
export class GraficaBarraComponent {
  @Input('data') barChartData!: ChartData<'bar'>;
  @Input() horizontal: boolean = false;
 
  public barChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    indexAxis: 'x',
    scales: {
      x: {},
      y: {
        min: 10
      }
    }
  };
 
  public barChartType: ChartType = 'bar';
 
  ngOnInit(): void {
    console.log(this.barChartData);
 
    //Si el grafico es horizontal
    if(this.horizontal) {
 
      //Para invertir las barras y colocarlas horizontalmente necesitamos cambiar el "indexAxis"
      this.barChartOptions!.indexAxis = 'y';
 
      //Para que se nos muestren todos los datos horizontalmente también debemos retirar el               
      //"min" que tenemos en el barChartOptions.
      this.barChartOptions!.scales!["y"]!.min = 0;
    }
  }
 
}

