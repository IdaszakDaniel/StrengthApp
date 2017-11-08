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
  TempArr: string[];
  reps: number;

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

  getSets(){
    return this.num;
  }

  getSetsReps(){
    this.TempArr = [];
    if(this.isSameReps()){
      for(let i = 0; i < this.num; i++){
        this.TempArr.push(this.reps);
      }
    }
    // } else{
    //   let i = 1;
    //   this.arr.forEach() {
    //     console.log(this.reps[i]);
    //     //this.TempArr.push(this."reps"+i);
    //     i++;
    //   }
    // }
    return this.TempArr;
  }

}
