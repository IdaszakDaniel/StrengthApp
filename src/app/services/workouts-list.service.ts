import { Injectable } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Injectable()
export class WorkoutsListService {

  WorkoutPlan: any = [];
  PlanUpdated: EventEmitter<any> = new EventEmitter();


  constructor() { }

  setWorkoutDay(workout, title){
    workout.title = title;
    this.WorkoutPlan.push(workout);
    this.PlanUpdated.emit(this.WorkoutPlan);
  }

  getWorkoutPlan(){
    return this.WorkoutPlan;
  }

  getWorkoutTitles(){
    return this.WorkoutPlan.map((el) => el.title));
  }

  getWorkout(id){
    let index = this.WorkoutPlan.indexOf(this.WorkoutPlan.filter((el) => el.title == id)[0]);
    if(index > -1) return this.WorkoutPlan[index];
  }

  deletePlan(el){
    var index = this.WorkoutPlan.indexOf(el);
    if(index > -1) this.WorkoutPlan.splice(index, 1);
    this.PlanUpdated.emit(this.WorkoutPlan);
  }

}
