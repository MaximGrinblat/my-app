import {Component, OnInit} from '@angular/core';
import * as Highcharts from 'highcharts';
import {AlgorithmService} from "../../services/algorithm.service";

// import {SelectALGComponent} from "../select-alg/select-alg.component";

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.css']
})
export class GraphComponent implements OnInit {

  highcharts: typeof Highcharts = Highcharts;
  data = [];
  options = {};
  selectedIdx = -1;

  constructor(private algService: AlgorithmService) {
  }

  ngOnInit(): void {

    this.data = [
      {
        name: this.algService.selectedChart,
        data: this.algService.table[this.selectedIdx]
      },
      {
        name: 'Nicesnippets.com',
        data: [677, 455, 677, 877, 455, 778, 888, 567, 785, 488, 567, 654]
      }];
    this.options = {
      chart: {
        type: 'spline'
      },
      title: {
        text: 'Monthly Site Visitor'
      },
      xAxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
      },
      yAxis: {
        title: {
          text: 'Visitors'
        }
      },
      series: this.data
    };
  }

  displayChart(): void {
    for (this.selectedIdx = 0; this.selectedIdx < 100; this.selectedIdx++) {
      if (this.algService.table[0][this.selectedIdx] == this.algService.selectedChart) {
        break;
      }
    }
    this.ngOnInit();
  }
}
