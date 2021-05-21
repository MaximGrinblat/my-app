import { Component, OnInit } from '@angular/core';
import { AlgorithmService } from '../../services/algorithm.service';

@Component({
  selector: 'app-select-alg',
  templateUrl: './select-alg.component.html',
  styleUrls: ['./select-alg.component.css']
})
export class SelectALGComponent implements OnInit {
  algorithm: string;

  constructor(private algService: AlgorithmService) { }

  ngOnInit(): void {
  }

  onChangeofOptions(newAlg) {
       this.algService.updateAlgorithm(newAlg);
  }

  onSubmit() {
    this.algService.onUpload();
  }


}
