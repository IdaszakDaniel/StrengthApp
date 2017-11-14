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
