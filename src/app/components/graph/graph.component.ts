import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import { AlgorithmService } from '../../services/algorithm.service';

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.css']
})
export class GraphComponent implements OnInit {

  highcharts: typeof Highcharts = Highcharts;

  data = [
    {
      name: 'ItSolutionStuff.com',
      data: [500, 700, 555, 444, 777, 877, 944, 567, 666, 789, 456, 654]
    },
    {
      name: 'Nicesnippets.com',
      data: [677, 455, 677, 877, 455, 778, 888, 567, 785, 488, 567, 654]
    }];

  chartOptions = {
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
  constructor(private algService: AlgorithmService) { }

  ngOnInit(): void {
  }
//
//   displayChart(): void {
//     this.data  = [
//                     {
//                       name: 'ItSolutionStuff.com',
//                       data: [500, 700, 555, 444, 777, 877, 944, 567, 666, 789, 456, 654]
//                     },
//                     {
//                       name: 'Nicesnippets.com',
//                       data: [677, 455, 677, 877, 455, 778, 888, 567, 785, 488, 567, 654]
//                     }];
//   }
 }
