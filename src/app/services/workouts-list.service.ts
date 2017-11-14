import { Injectable } from '@angular/core';

@Injectable()
export class WorkoutsListService {

  WorkoutPlan: any = [];

  constructor() { }

  setWorkoutDay(workout){
    this.WorkoutPlan.push(workout);
  }

  getWorkoutPlan(){
    return this.WorkoutPlan;
  }

}
