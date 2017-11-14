import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reps-sets',
  templateUrl: './reps-sets.component.html',
  styleUrls: ['./reps-sets.component.scss']
})
export class RepsSetsComponent implements OnInit {
  num: number;
  arr: any;
  sameReps: boolean;
  TempArr: number[];
  reps: number;
  words: number[] = [];

  constructor() {
  }

  ngOnInit() {
  }

  createArr(num){
    this.arr = [];
    for (let i = 0; i < num; i++){
      this.arr.push(i);
    }
  }

  isSameReps(){
    return this.sameReps;
  }

  getSets(){
    return this.num;
  }

  getSetsReps(){
    this.TempArr = [];
    if(this.isSameReps()){
      for(let i = 0; i < this.num; i++){
        this.TempArr.push(this.reps);
      }
      return this.TempArr;
    } else{
        return this.words;
      }
  }

}
