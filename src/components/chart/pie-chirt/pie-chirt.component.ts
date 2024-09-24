import { Component } from '@angular/core';

@Component({
  selector: 'app-pie-chirt',
  templateUrl: './pie-chirt.component.html',
  styleUrls: ['./pie-chirt.component.css'],
})
export class PieChirtComponent {
  chartOptions = {
    animationEnabled: true,
    title: {
      text: 'Project Cost Breakdown',
    },
    data: [
      {
        type: 'doughnut',
        yValueFormatString: "#,###.##'%'",
        indexLabel: '{name}',
        dataPoints: [
          { y: 28, name: 'Labour' },
          { y: 10, name: 'Legal' },
          { y: 20, name: 'Production' },
          { y: 15, name: 'License' },
          { y: 23, name: 'Facilities' },
          { y: 17, name: 'Taxes' },
          { y: 12, name: 'Insurance' },
        ],
      },
    ],
  };
}
