import { Component, OnInit, ViewChild } from '@angular/core';
import { RepsSetsComponent } from '../reps-sets/reps-sets.component';
import { AddWorkoutService } from '../../services/add-workout.service';
import { WorkoutsListService } from '../../services/workouts-list.service';



@Component({
  selector: 'app-new-workout',
  templateUrl: './new-workout.component.html',
  styleUrls: ['./new-workout.component.scss']
})
export class NewWorkoutComponent implements OnInit {

  bodyParts: string[];
  type: string;
  name: string;
  exercises: any;
  plans: any = [];
  initialState: boolean = true;
  addWorkout;
  workoutsList;
  @ViewChild(RepsSetsComponent) repsSets:RepsSetsComponent;

  constructor(addWorkoutService:AddWorkoutService, workoutsListService:WorkoutsListService) {
    this.addWorkout = addWorkoutService;
    this.workoutsList = workoutsListService;
  }

  ngOnInit() {
    this.bodyParts = ['bicep','back','calves','delts','traps'];
    this.plans = this.workoutsList.getWorkoutPlan();

    this.addWorkout.workoutUpdated.subscribe(
      (exercises) => {
        this.exercises = exercises;
      }
    );

  }

  newWorkout(){
    this.initialState = false;
  }

  addExercise(){
    this.addWorkout.setExercise(this.type,
                        this.name,
                        this.repsSets.getSets(),
                        this.repsSets.getSetsReps());
  }

  saveWorkout(){
    this.workoutsList.setWorkoutDay(this.exercises);
    this.addWorkout.resetCurrentWorkout();
    this.exercises = [];
    this.plans = this.workoutsList.getWorkoutPlan();
    this.initialState = true;
  }

}
