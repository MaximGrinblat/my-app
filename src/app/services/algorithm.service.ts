import { Injectable } from '@angular/core';
import { combineLatest } from 'rxjs';
import { Observable, BehaviorSubject } from 'rxjs';
import { NgxCsvParser } from 'ngx-csv-parser';
import { NgxCSVParserError } from 'ngx-csv-parser';

@Injectable({
  providedIn: 'root'
})
export class AlgorithmService {

  csvRecords: any[] = [];
  header = false;
  selectedChart = "";
  table = [];
  graphLabels$ = new BehaviorSubject<string[]>([]);

  private algorithm$ = new BehaviorSubject<string>('');
  private fileTest$ = new BehaviorSubject<File>(null);
  private fileTrain$ = new BehaviorSubject<File>(null);

  constructor(private ngxCsvParser: NgxCsvParser) {
  }

  updateAlgorithm(alg: string){
    this.algorithm$.next(alg);
  }

  updateFileTest(f: File){
      this.fileTest$.next(f);
  }

  updateFileTrain(f: File){
      this.fileTrain$.next(f);
  }

  onUpload() {
    const f1: File = this.fileTest$.getValue();
    const f2: File = this.fileTrain$.getValue();

     // Parse the file you want to select for the operation along with the configuration
     combineLatest(
        this.ngxCsvParser.parse(f1, { header: this.header, delimiter: ',' }),
        this.ngxCsvParser.parse(f2, { header: this.header, delimiter: ',' }))
        .subscribe(([result1, result2]: any) => {
            // callServer(this.algorithm$.getValue(), JSON.stringify(this.transformResult(result1)),JSON.stringify(this.transformResult(result2)));
            this.table = result1;
            this.graphLabels$.next(result1[0]);
            console.log(this.algorithm$.getValue());
            console.log('Transformed Result1', JSON.stringify(this.transformResult(result1)));
            console.log('Transformed Result2', JSON.stringify(this.transformResult(result2)));
          }, (error: NgxCSVParserError) => {
            console.log('Error', error);
     });
  }

   private transformResult(result: Array<any>):Array<any> {
      const transformedResult = new Array<any>();
      for (let i=0; i < result.length; i++) {
          for (let j=0; j < result[i].length; j++) {
            let rowResult: Array<any>;
            if(i===0) {
                rowResult = new Array<any>();
                transformedResult.push(rowResult);
            }
            transformedResult[j].push(result[i][j]);
          }
      }
      return transformedResult;
  }



}
