import { Injectable } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Injectable()
export class WorkoutsListService {

  WorkoutPlan: any = [];
  PlanUpdated: EventEmitter<any> = new EventEmitter();


  constructor() { }

  setWorkoutDay(workout){
    this.WorkoutPlan.push(workout);
    this.PlanUpdated.emit(this.WorkoutPlan);
  }

  getWorkoutPlan(){
    return this.WorkoutPlan;
  }

  deletePlan(el){
    var index = this.WorkoutPlan.indexOf(el);
    if(index > -1) this.WorkoutPlan.splice(index, 1);
    this.PlanUpdated.emit(this.WorkoutPlan);
  }

}
