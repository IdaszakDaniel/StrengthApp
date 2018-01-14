import { Injectable } from '@angular/core';
import * as _ from 'lodash';

@Injectable()
export class WorkoutDaysService {

  workoutDays: any = [];
  id: number = 1;

  constructor() { }

  setDay(el, date){
    this.workoutDays.push([this.id, el, date]);
    this.id++;
  }

  getId(){
    return this.id - 1;
  }

  getDay(date){
    let obj = this.workoutDays.filter(el => el[2] == date);
    if(obj != undefined){
      return (obj.length > 0) ? obj[0] : undefined;
    }
  }

  // findExercise(exercise){
  //   let obj1 = this.workoutDays.map(el => el[1]).map(el => el.workout);
  //   return (_.flatMap(obj1).filter(el => el.name == exercise).length > 0) ? true : false;
  // }//in progress - suggestion of weight

}
