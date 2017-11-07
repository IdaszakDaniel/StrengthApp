import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reps-sets',
  templateUrl: './reps-sets.component.html',
  styleUrls: ['./reps-sets.component.scss']
})
export class RepsSetsComponent implements OnInit {
  num: number = 0;
  arr: any;
  sameReps: boolean;
  constructor() {
  }

  ngOnInit() {
  }

  createArr(num){
    this.arr = [];
    for (let i = 0; i < num; i++){
      this.arr.push('x');
    }
  }

  isSameReps(){
    return this.sameReps;
  }
}
