import { Injectable } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { ResourceService } from './resource.service';

@Injectable()
export class WorkoutsListService {

  WorkoutPlan: any = [];
  PlanUpdated: EventEmitter<any> = new EventEmitter();
  resource;

  constructor(resourceService:ResourceService) {
    this.resource = resourceService;
  }

  fetchWorkouts(){
    this.resource.getData().subscribe(el => {
  		this.WorkoutPlan = el;
  	});
    this.PlanUpdated.emit(this.WorkoutPlan);
  }

  setWorkoutDay(workout, title){
    this.WorkoutPlan.push({title, workout});
    this.PlanUpdated.emit(this.WorkoutPlan);
  }

  getWorkoutPlan(){
    return this.WorkoutPlan;
  }

  getWorkoutTitles(){
    return this.WorkoutPlan.map(el => el.title));
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
