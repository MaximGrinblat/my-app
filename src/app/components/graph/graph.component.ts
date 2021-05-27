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
  options: Highcharts.Options = {
    series: []
  };
  selectedIdx = -1;
  updateFlag: true;

  example = [{"start": 11, "end": 13, "description": "A-B"},
    {"start": 11, "end": 120, "description": "B-F"},
    {"start": 11, "end": 13, "description": "C-D"},
    {"start": 11, "end": 13, "description": "D-E"},
    {"start": 11, "end": 13, "description": "E-F"},
    {"start": 11, "end": 13, "description": "F-A"}
  ];
  parsed: any;
  matchedChart: any;
  matchedChartIdx = -1;
  startIdx: number;
  endIdx: number;

  constructor(private algService: AlgorithmService) {
  }

  ngOnInit(): void {

    this.data = [
      {
        name: this.algService.selectedChart,
        data: this.getCol(this.algService.table, this.selectedIdx)
      },
      {
        name: this.matchedChart,
        data: this.getCol(this.algService.table, this.matchedChartIdx)
      },
      {
        name: "Anomaly",
        data: [[this.startIdx, 50], [this.endIdx, 50]]
      }
    ];
    this.options = {
      chart: {
        type: 'spline'
      },
      title: {
        text: 'Monthly Site Visitor'
      },
      yAxis: {
        title: {
          text: 'Visitors'
        }
      },
      series: this.data
    };
  }

  rsplit(st, sep, maxsplit) {
    var split = st.split(sep);
    return maxsplit ? [split.slice(0, -maxsplit).join(sep)].concat(split.slice(-maxsplit)) : split;
  }

  displayChart(): void {
    let parsed = [];
    for (let i = 0; i < this.algService.table[0].length; i++) {
      parsed = this.rsplit(this.example[i]['description'], "-", 1);
      if (parsed[0] == this.algService.selectedChart) {
        this.matchedChart = parsed[1];
        this.startIdx = this.example[i]["start"];
        this.endIdx = this.example[i]["end"];
      }
    }
    this.matchedChartIdx = this.getIdxChart(this.algService.table, this.matchedChart);
    this.selectedIdx = this.getIdxChart(this.algService.table, this.algService.selectedChart);
    this.ngOnInit();
  }

  getIdxChart(matrix, chart) {
    let i = 0;
    for (i = 0; i < matrix.length; i++) {
      if (matrix[0][i] == chart) {
        return i;
      }
    }
  }

  getCol(matrix, col) {
    var column = [];
    for (var i = 1; i < matrix.length; i++) {
      column.push(parseInt(matrix[i][col]));
    }
    return column;
  }
}
