import { Component, OnInit } from '@angular/core';
import { GraficasService } from '../../services/graficas.service';
import { ChartType, ChartData } from 'chart.js';

@Component({
  selector: 'app-dona-http',
  templateUrl: './dona-http.component.html',
  styles: [
  ]
})
export class DonaHttpComponent implements OnInit {

  // public doughnutChartLabels: string[] = [];
  // public doughnutChartData!: ChartData<'doughnut'>;
  public doughnutChartType: ChartType = 'doughnut';

  constructor(private graficaService: GraficasService) { }
  ngOnInit(): void {
    this.graficaService.getData()
      .subscribe(data => {
        this.doughnutChartData = {
          labels: Object.keys(data),
          datasets: [{ data: Object.values(data) }]
        }
      })}

  //   this.graficaService.getData2()
  //   .subscribe(({labels,values}) => {
  //     this.doughnutChartLabels = labels;
  //     this.doughnutChartData.datasets = values;
  //   })
  // }

  public doughnutChartLabels: string[] =
    ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];

  public doughnutChartData: ChartData<'doughnut'> = {
    labels: this.doughnutChartLabels,
    datasets: [
      {
        data: [350, 450, 100],
        backgroundColor: ['#58A4FC', '#FA4EB2', '#4FF0E4'],
        hoverBackgroundColor: ['#58A4FC', '#FA4EB2', '#5349E6']

      },

    ]
  };

}
