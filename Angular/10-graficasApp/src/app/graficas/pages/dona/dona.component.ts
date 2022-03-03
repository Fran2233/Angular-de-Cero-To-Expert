import { Component, OnInit } from '@angular/core';
import { ChartType, ChartData, Color } from 'chart.js';
import { GraficasService } from '../../services/graficas.service';

@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styles: [
  ]
})
export class DonaComponent {


  constructor(){

  }
  // Doughnut
  public doughnutChartLabels: string[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];

  public doughnutChartData: ChartData<'doughnut'> = {
    labels: this.doughnutChartLabels,
    datasets: [
      { data: [350, 450, 100],
        backgroundColor:['#58A4FC','#FA4EB2', '#4FF0E4'],
        hoverBackgroundColor: ['#58A4FC','#FA4EB2', '#5349E6']
      
      },
      
    ]
  };
  public doughnutChartType: ChartType = 'doughnut';


  

  
}
