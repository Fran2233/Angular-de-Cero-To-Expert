import { Component, OnInit } from '@angular/core';
import { ChartDatasetProperties, ChartData, ChartConfiguration } from 'chart.js';

@Component({
  selector: 'app-barras-doble',
  templateUrl: './barras-doble.component.html',
  styles: [
  ]
})
export class BarrasDobleComponent {



  proveedoresData: ChartData<'bar'> = {
    labels: ['2021', '2022', '2023', '2024', '2025'],
    datasets: [
      {
        data: [1000, 50, 300, 200, 500], label: 'Vendedor A',
        backgroundColor: 'lightgreen',
        borderColor: 'green'
      },
      { data: [900, 250, 30, 450, 200], label: 'Vendedor B' }
    ]
  }

  productoData: ChartData<'bar'> = {
    labels: ['2021', '2022', '2023', '2024', '2025'],
    datasets: [
      { data: [200, 300, 400, 3000, 1000], label: 'Carros', backgroundColor: 'blue' }
    ]
  }

  lineOptions: ChartConfiguration['options'] = {
    elements: {
      line: {
        tension: 0.5
      }
    }
  }
}

