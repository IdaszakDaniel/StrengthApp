import { Component, OnInit, ViewChild } from '@angular/core';
import { RepsSetsComponent } from '../reps-sets/reps-sets.component'

@Component({
  selector: 'app-new-workout',
  templateUrl: './new-workout.component.html',
  styleUrls: ['./new-workout.component.scss']
})
export class NewWorkoutComponent implements OnInit {

  exercises: string[];
  type: string;
  name: string;
  workouts: any = [];
  @ViewChild(RepsSetsComponent) repsSets:RepsSetsComponent;

  constructor() { }

  ngOnInit() {
    this.exercises = ['bicep','back','calves','delts','traps'];
  }

  addExercise(){
    var x = new Exercise(this.type,
                        this.name,
                        this.repsSets.getSets(),
                        this.repsSets.getSetsReps());
    this.workouts.push(x);
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
