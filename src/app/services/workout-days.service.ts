import { Injectable } from '@angular/core';

@Injectable()
export class WorkoutDaysService {

  WorkoutDays: any = [];
  id: number = 1;

  constructor() { }

  setDay(el, date){
    this.WorkoutDays.push(this.id, el, date);
    this.id++;
    console.log(this.WorkoutDays);
  }

}
