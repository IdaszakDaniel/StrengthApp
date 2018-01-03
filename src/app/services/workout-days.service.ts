import { Injectable } from '@angular/core';

@Injectable()
export class WorkoutDaysService {

  WorkoutDays: any = [];
  id: number = 1;

  constructor() { }

  setDay(el, date){
    this.WorkoutDays.push([this.id, el, date]);
    this.id++;
  }

  getId(){
    return this.id - 1;
  }

  getDay(date){
    let obj = this.WorkoutDays.filter(el => el[2] == date);
    if(obj != undefined){
      return (obj.length > 0) ? obj[0] : undefined;
    }
  }

}
