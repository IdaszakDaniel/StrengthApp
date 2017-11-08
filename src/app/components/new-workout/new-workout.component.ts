import { Component, OnInit, ViewChild } from '@angular/core';
import { RepsSetsComponent } from '../reps-sets/reps-sets.component'

@Component({
  selector: 'app-new-workout',
  templateUrl: './new-workout.component.html',
  styleUrls: ['./new-workout.component.scss']
})
export class NewWorkoutComponent implements OnInit {

  exercises: string[];
  @ViewChild(RepsSetsComponent) repsSets:RepsSetsComponent;

  constructor() { }

  ngOnInit() {
    this.exercises = ['bicep','back','calves','delts','traps']
  }

  addExercise(type: string, name: string, sets: number, reps:number[]){
    var x = new Exercise(type, name, sets, reps);
    console.log(x);
    console.log(this.repsSets.sameReps);
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
