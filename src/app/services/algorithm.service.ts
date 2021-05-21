import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlgorithmService {

  private algorithm$ = new BehaviorSubject<string>('');
  private fileTest$ = new BehaviorSubject<File>(null);
  private fileTrain$ = new BehaviorSubject<File>(null);

  constructor() {
  }

  updateAlgorithm(alg: string){
    this.algorithm$.next(alg)
  }

  updateFileTest(f: File){
      this.fileTest$.next(f)
  }

  updateFileTrain(f: File){
      this.fileTrain$.next(f)
  }


  onUpload() {
    console.log(this.algorithm$.getValue());
    const f1 = this.fileTest$.getValue();
    const f2 = this.fileTrain$.getValue();

  }



}
