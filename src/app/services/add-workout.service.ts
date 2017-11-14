import { Injectable } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Injectable()
export class AddWorkoutService {
  data: any;
  workout: any = [];
  workoutUpdated: EventEmitter<any> = new EventEmitter();

  constructor() { }

  setExercise(type, name, sets, reps){
    this.data = new Exercise(type, name, sets, reps);
    this.workout.push(this.data);
    this.workoutUpdated.emit(this.workout);
  }

  resetCurrentWorkout(){
    this.workout = [];
    this.workoutUpdated.emit(this.workout);
  }

  deleteExercise(el){
    var index = this.workout.indexOf(el);
    if(index > -1) this.workout.splice(index, 1);
    this.workoutUpdated.emit(this.workout);
  }

  editWorkout(el){
    this.workout = el;
    this.workoutUpdated.emit(this.workout);
  }

}

class Exercise {
  type: string;
  name: string;
  sets: number;
  reps: number[];

  constructor(type, name, sets, reps){
    this.type = type;
    this.name = name;
    this.sets = sets;
    this.reps = reps;
  }
}
